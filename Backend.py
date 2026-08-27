from flask import Flask, request, jsonify, session, render_template
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
# Clave secreta necesaria para mantener las sesiones de usuario seguras
app.secret_key = 'super_secreta_churroteca' 

# Configuración de tu base de datos MySQL local
db_config = {
    'host': 'localhost',
    'user': 'root',          # Reemplaza con tu usuario de MySQL Workbench
    'password': 'Vcruz2009#..', # Reemplaza con tu contraseña
    'database': 'Datos'
}

# Función para conectar a la base de datos
def obtener_conexion():
    return mysql.connector.connect(**db_config)

# -----------------------------------------------------
# RUTAS DE LA APLICACIÓN
# -----------------------------------------------------

# 1. Servir tu archivo HTML principal
@app.route('/')
def inicio():
    # Flask busca 'index.html' (o 'Index.html') dentro de la carpeta 'templates'
    return render_template('index.html')

# 2. Ruta para REGISTRAR un nuevo usuario
@app.route('/api/registro', methods=['POST'])
def registro():
    datos = request.json
    nombre = datos.get('nombre')
    correo = datos.get('correo')
    contrasena = datos.get('contrasena')
    
    # Encriptar la contraseña por seguridad
    hash_contrasena = generate_password_hash(contrasena)
    
    conexion = obtener_conexion()
    cursor = conexion.cursor()
    
    try:
        sql = "INSERT INTO Usuarios (nombre, correo, contrasena_hash) VALUES (%s, %s, %s)"
        cursor.execute(sql, (nombre, correo, hash_contrasena))
        conexion.commit()
        return jsonify({"mensaje": "Usuario registrado exitosamente"}), 201
    except mysql.connector.IntegrityError:
        return jsonify({"error": "El correo ya está registrado"}), 400
    finally:
        cursor.close()
        conexion.close()

# 3. Ruta para INICIAR SESIÓN
@app.route('/api/login', methods=['POST'])
def login():
    datos = request.json
    correo = datos.get('correo')
    contrasena = datos.get('contrasena')
    
    conexion = obtener_conexion()
    cursor = conexion.cursor(dictionary=True)
    
    sql = "SELECT id_usuario, nombre, contrasena_hash FROM Usuarios WHERE correo = %s"
    cursor.execute(sql, (correo,))
    usuario = cursor.fetchone()
    
    cursor.close()
    conexion.close()
    
    # Verificar si el usuario existe y si la contraseña coincide con el hash
    if usuario and check_password_hash(usuario['contrasena_hash'], contrasena):
        # Guardar datos en la sesión del servidor
        session['id_usuario'] = usuario['id_usuario']
        session['nombre'] = usuario['nombre']
        return jsonify({"mensaje": "Login exitoso", "nombre": usuario['nombre']}), 200
    else:
        return jsonify({"error": "Correo o contraseña incorrectos"}), 401

# 4. Ruta para CERRAR SESIÓN
@app.route('/api/logout', methods=['POST'])
def logout():
    session.clear() # Borra la sesión actual
    return jsonify({"mensaje": "Sesión cerrada"}), 200

# 5. Ruta para OBTENER y CREAR reseñas (Conectado a MySQL)
@app.route('/api/resenas', methods=['GET', 'POST'])
def gestionar_resenas():
    conexion = obtener_conexion()
    cursor = conexion.cursor(dictionary=True)
    
    if request.method == 'GET':
        sql = """
            SELECT u.nombre AS autor, r.comentario, r.fecha_creacion, r.calificacion 
            FROM Resenas r
            JOIN Usuarios u ON r.id_usuario = u.id_usuario
            ORDER BY r.fecha_creacion DESC
        """
        cursor.execute(sql)
        resenas = cursor.fetchall()
        cursor.close()
        conexion.close()
        return jsonify(resenas), 200
        
    elif request.method == 'POST':
        # Validar si el usuario ha iniciado sesión en el servidor
        if 'id_usuario' not in session:
            cursor.close()
            conexion.close()
            return jsonify({"error": "Debes iniciar sesión para dejar una opinión"}), 401
            
        datos = request.json
        comentario = datos.get('comentario')
        calificacion = datos.get('calificacion', 5)
        id_usuario = session['id_usuario']
        
        try:
            sql = "INSERT INTO Resenas (id_usuario, comentario, calificacion) VALUES (%s, %s, %s)"
            cursor.execute(sql, (id_usuario, comentario, calificacion))
            conexion.commit()
            cursor.close()
            conexion.close()
            return jsonify({"mensaje": "Reseña guardada exitosamente"}), 201
        except Exception as e:
            cursor.close()
            conexion.close()
            return jsonify({"error": "No se pudo guardar la reseña"}), 500

# Ejecutar el servidor web en el puerto 5000
if __name__ == '__main__':
    app.run(debug=True, port=5000)