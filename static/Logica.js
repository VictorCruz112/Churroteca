(function(){
'use strict';

/* ---------------- iconos ---------------- */
const ICONS = {
  pencil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"/><circle cx="12" cy="13" r="4"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  starEmpty:'<svg class="empty" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  droplet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69s6 7.36 6 11.31a6 6 0 1 1-12 0c0-3.95 6-11.31 6-11.31z"/></svg>',
  bulb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6Z"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  check2:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
};

const VALUES = [
  {label:'Responsabilidad', icon:'check'},
  {label:'Higiene', icon:'droplet'},
  {label:'Creatividad', icon:'bulb'},
  {label:'Honestidad', icon:'heart'},
  {label:'Trabajo en equipo', icon:'users'}
];

const TEAM = [
  {name:'Victor Josue Cruz Tejada', initials:'VC', color:'var(--canela)'},
  {name:'Eduardo Ernesto Lima Aleman', initials:'EL', color:'var(--achiote)'},
  {name:'Jennifer Abigail Martinez Sorto', initials:'JM', color:'var(--limon)'},
  {name:'Yesenia Sarai Garcia Rauda', initials:'YG', color:'var(--canela-deep)'},
  {name:'Rafael Adrian Mendoza Fajardo', initials:'RM', color:'var(--achiote-deep)'},
  {name:'Jeferson Dagoberto Ramirez Monroy', initials:'JR', color:'var(--limon-deep)'}
];

const PRODUCT_ICONS = {
  basico: '<svg viewBox="0 0 200 200"><g fill="none" stroke="#2A1B12" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"><path d="M60 170 L75 70 Q100 55 125 70 L140 170 Z" fill="#F0A93B"/><path d="M70 95 Q100 82 130 95" fill="none" stroke="#D9841E" stroke-width="4"/><path d="M67 120 Q100 106 133 120" fill="none" stroke="#D9841E" stroke-width="4"/><path d="M63 145 Q100 130 137 145" fill="none" stroke="#D9841E" stroke-width="4"/></g><g fill="#8FB93E" stroke="#2A1B12" stroke-width="3"><circle cx="55" cy="60" r="12"/></g><path d="M50 48 L60 40 M60 48 L50 40" stroke="#2A1B12" stroke-width="3" stroke-linecap="round"/><g fill="#DE4E2E" stroke="#2A1B12" stroke-width="3"><path d="M140 55 L155 45 L160 60 L148 68Z"/></g></svg>',
  fruta: '<svg viewBox="0 0 200 200"><g fill="none" stroke="#2A1B12" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"><path d="M60 170 L75 75 Q100 60 125 75 L140 170 Z" fill="#F0A93B"/><path d="M70 98 Q100 85 130 98" fill="none" stroke="#D9841E" stroke-width="4"/><path d="M67 122 Q100 108 133 122" fill="none" stroke="#D9841E" stroke-width="4"/></g><g stroke="#2A1B12" stroke-width="3"><circle cx="82" cy="60" r="10" fill="#8FB93E"/><circle cx="105" cy="50" r="11" fill="#DE4E2E"/><circle cx="126" cy="62" r="9" fill="#F0A93B"/><rect x="94" y="66" width="14" height="14" rx="3" fill="#D9841E" transform="rotate(20 101 73)"/></g></svg>',
  bandeja: '<svg viewBox="0 0 200 200"><ellipse cx="100" cy="150" rx="80" ry="20" fill="#F5D9A0" stroke="#2A1B12" stroke-width="5"/><g fill="none" stroke="#2A1B12" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"><path d="M55 145 L64 70 Q75 60 85 70 L90 145Z" fill="#F0A93B"/><path d="M95 145 L104 60 Q115 48 126 60 L130 145Z" fill="#F0A93B"/><path d="M138 145 L146 75 Q155 66 163 75 L168 145Z" fill="#F0A93B"/></g><g stroke="#2A1B12" stroke-width="2.5"><circle cx="72" cy="95" r="6" fill="#8FB93E"/><circle cx="112" cy="82" r="7" fill="#DE4E2E"/><circle cx="152" cy="98" r="6" fill="#8FB93E"/></g></svg>',
  frescos: '<svg viewBox="0 0 200 200"><g stroke="#2A1B12" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"><path d="M62 78 L72 168 Q100 178 128 168 L138 78Z" fill="#F5D9A0"/><path d="M62 78 Q100 92 138 78 Q100 64 62 78Z" fill="#EFE0BC"/></g><path d="M96 40 L110 58 L100 60 L112 82" fill="none" stroke="#8FB93E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><g stroke="#2A1B12" stroke-width="3"><circle cx="82" cy="110" r="8" fill="#fff"/><circle cx="112" cy="130" r="7" fill="#fff"/><circle cx="95" cy="150" r="6" fill="#fff"/></g></svg>'
};

const DEFAULT_PRODUCTS = [
  {id:'basico', name:'Churros Locos Básico', price:1.00, desc:'Churritos crocantes bañados en limón fresco, chile al gusto y un toque de sal.', icon:'basico', image:null},
  {id:'fruta', name:'Churros Locos con Fruta', price:1.50, desc:'La receta básica coronada con pepino, guayaba y guindas frescas.', icon:'fruta', image:null},
  {id:'bandeja', name:'Bandeja Churroteca', price:2.50, desc:'Nuestra presentación más grande, ideal para compartir en el recreo.', icon:'bandeja', image:null},
  {id:'frescos', name:'Frescos Naturales', price:0.75, desc:'Horchata, tamarindo o jamaica, bien fríos para calmar la sed.', icon:'frescos', image:null}
];

let currentUser = null;
let products = [];
let reviews = [];

/* ---------------- utilidades ---------------- */
function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = String(str==null?'':str);
  return d.innerHTML;
}
function formatPrice(n){
  const num = Number(n);
  return '$'+(isNaN(num)?'0.00':num.toFixed(2));
}
function initialsOf(name){
  const parts = String(name||'').trim().split(/\s+/);
  if(!parts[0]) return '?';
  if(parts.length===1) return parts[0].slice(0,2).toUpperCase();
  return (parts[0][0]+parts[1][0]).toUpperCase();
}
/* ---------------- toast ---------------- */
function showToast(message, type){
  type = type||'default';
  const el = document.createElement('div');
  el.className = 'toast'+(type!=='default'?' toast-'+type:'');
  const icon = type==='error'?ICONS.alert:(type==='success'?ICONS.check2:'');
  el.innerHTML = (icon?'<span style="display:flex;">'+icon+'</span>':'')+'<span>'+escapeHtml(message)+'</span>';
  document.getElementById('toastContainer').appendChild(el);
  requestAnimationFrame(()=>el.classList.add('show'));
  setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=>el.remove(),350);
  },3400);
}

/* ---------------- confeti ---------------- */
function burstConfetti(x,y){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors=['#F0A93B','#DE4E2E','#8FB93E','#D9841E'];
  for(let i=0;i<22;i++){
    const p=document.createElement('div');
    p.className='confetti-piece';
    const angle = Math.random()*Math.PI*2;
    const dist = 60+Math.random()*90;
    p.style.setProperty('--cx',x+'px');
    p.style.setProperty('--cy',y+'px');
    p.style.setProperty('--tx',Math.cos(angle)*dist+'px');
    p.style.setProperty('--ty',Math.sin(angle)*dist+'px');
    p.style.setProperty('--rot',(Math.random()*360)+'deg');
    p.style.background=colors[i%colors.length];
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),950);
  }
}

/* ---------------- autenticación (Conectado a Flask) ---------------- */
async function registerUser(name, email, password) {
  const res = await fetch('/api/registro', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre: name.trim(), correo: email.trim().toLowerCase(), contrasena: password })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Error en el registro');
  
  const user = { name: name.trim(), email: email.trim().toLowerCase() };
  localStorage.setItem('session_user', JSON.stringify(user));
  return user;
}

async function loginUser(email, password) {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ correo: email.trim().toLowerCase(), contrasena: password })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Correo o contraseña incorrectos');
  
  const user = { name: data.nombre, email: email.trim().toLowerCase() };
  localStorage.setItem('session_user', JSON.stringify(user));
  return user;
}

async function loadSession() {
  const stored = localStorage.getItem('session_user');
  if(stored){
    try{ currentUser = JSON.parse(stored); }catch(e){ currentUser = null; }
  }
}

async function logoutUser() {
  await fetch('/api/logout', { method: 'POST' });
  localStorage.removeItem('session_user');
  currentUser = null;
}

/* ---------------- productos ---------------- */
// Los productos (nombre, precio, descripción, foto) vienen únicamente de
// DEFAULT_PRODUCTS. Ningún usuario puede modificarlos desde el sitio: para
// cambiar algo hay que editar esa constante aquí en el código.
async function loadProducts(){
  products = DEFAULT_PRODUCTS.map(p=>({...p}));
}

/* ---------------- opiniones (Conectado a MySQL vía Flask) ---------------- */
async function loadReviews() {
  try {
    const res = await fetch('/api/resenas');
    if (res.ok) {
      const data = await res.json();
      reviews = data.map(r => ({
        name: r.autor,
        comment: r.comentario,
        timestamp: new Date(r.fecha_creacion).getTime(),
        rating: r.calificacion || 5
      }));
    }
  } catch(e) {
    console.error('Error cargando reseñas desde Flask', e);
  }
}

async function addReview(review) {
  const res = await fetch('/api/resenas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      comentario: review.comment,
      calificacion: review.rating
    })
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'No se pudo guardar la opinión');
  }
  // Recargar reseñas desde el servidor para mostrar la nueva con datos reales
  await loadReviews();
}

/* ---------------- render: nav / cuenta ---------------- */
function updateAuthUI(){
  const guest = document.getElementById('guestActions');
  const userBox = document.getElementById('userActions');
  if(currentUser){
    guest.style.display='none';
    userBox.style.display='block';
    document.getElementById('userAvatarSm').textContent = initialsOf(currentUser.name);
    document.getElementById('userNameLabel').textContent = currentUser.name.split(' ')[0];
    document.getElementById('logoutBtn').innerHTML = ICONS.logout+'<span>Cerrar sesión</span>';
    const rn = document.getElementById('reviewName');
    if(rn) {
      rn.value = currentUser.name;
      rn.disabled = true; // Bloqueado para que use el nombre de su cuenta logueada
    }
  } else {
    guest.style.display='block';
    userBox.style.display='none';
    const rn = document.getElementById('reviewName');
    if(rn) {
      rn.value = '';
      rn.disabled = false;
    }
  }
}

/* ---------------- render: valores ---------------- */
function renderValues(){
  document.getElementById('valuesRow').innerHTML = VALUES.map(v=>
    '<div class="value-pill"><div class="vi">'+ICONS[v.icon]+'</div><span>'+v.label+'</span></div>'
  ).join('');
}

/* ---------------- render: equipo ---------------- */
function renderTeam(){
  document.getElementById('teamGrid').innerHTML = TEAM.map((m,i)=>
    '<div class="team-card" data-reveal data-reveal-delay="'+((i%5)+1)+'">'+
      '<div class="team-avatar" style="background:'+m.color+';">'+m.initials+'</div>'+
      '<h4>'+escapeHtml(m.name)+'</h4>'+
      '<span class="team-role">Cofundador/a</span>'+
    '</div>'
  ).join('');
  setupReveal();
}

/* ---------------- render: productos ---------------- */
function productMedia(p){
  if(p.image){
    return '<img src="'+p.image+'" alt="Foto de '+escapeHtml(p.name)+'" class="product-photo">';
  }
  return '<div class="product-placeholder">'+(PRODUCT_ICONS[p.icon]||PRODUCT_ICONS.basico)+'</div>';
}
function renderProducts(){
  document.getElementById('productsGrid').innerHTML = products.map((p,i)=>
    '<article class="product-card" data-reveal data-reveal-delay="'+((i%4)+1)+'">'+
      '<div class="product-media">'+
        productMedia(p)+
      '</div>'+
      '<div class="product-body">'+
        '<div class="product-head"><h3>'+escapeHtml(p.name)+'</h3></div>'+
        '<p class="product-desc">'+escapeHtml(p.desc||'')+'</p>'+
        '<span class="price-tag">'+formatPrice(p.price)+'</span>'+
      '</div>'+
    '</article>'
  ).join('');
  setupReveal();
}

/* ---------------- render: opiniones ---------------- */
function starsMarkup(rating){
  let out='';
  for(let i=1;i<=5;i++){ out += i<=Math.round(rating) ? ICONS.star : ICONS.starEmpty; }
  return out;
}
function renderReviews(){
  const container = document.getElementById('reviewsContainer');
  const avgBlock = document.getElementById('avgRatingBlock');
  if(!reviews.length){
    avgBlock.style.display='none';
    container.innerHTML =
      '<div class="reviews-empty" data-reveal style="grid-column:1/-1;">'+
        '<div class="empty-icon">'+ICONS.star+'</div>'+
        '<h3>Sé el primero en compartir tu opinión</h3>'+
        '<p>Cuando alguien pruebe Churroteca en la feria, sus comentarios aparecerán justo aquí.</p>'+
      '</div>';
    setupReveal();
    return;
  }
  avgBlock.style.display='flex';
  const avg = reviews.reduce((s,r)=>s+Number(r.rating||0),0)/reviews.length;
  document.getElementById('avgRatingValue').textContent = avg.toFixed(1);
  document.getElementById('avgRatingStars').innerHTML = starsMarkup(avg);
  document.getElementById('avgRatingCount').textContent = 'basado en '+reviews.length+(reviews.length===1?' opinión':' opiniones');
  container.innerHTML = reviews.map((r,i)=>
    '<article class="review-card" data-reveal data-reveal-delay="'+((i%4)+1)+'">'+
      '<div class="review-stars">'+starsMarkup(r.rating)+'</div>'+
      '<p class="review-comment">"'+escapeHtml(r.comment)+'"</p>'+
      '<div class="review-author"><span class="review-avatar">'+initialsOf(r.name)+'</span><span>'+escapeHtml(r.name)+'</span></div>'+
    '</article>'
  ).join('');
  setupReveal();
}

/* ---------------- scroll reveal ---------------- */
let revealObserver=null;
function setupReveal(){
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = document.querySelectorAll('[data-reveal]:not(.is-visible)');
  if(reduced){ els.forEach(el=>el.classList.add('is-visible')); return; }
  if(!revealObserver){
    revealObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },{threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  }
  els.forEach(el=>revealObserver.observe(el));
}

/* ---------------- nav ---------------- */
function setupNav(){
  const nav = document.getElementById('siteNav');
  const onScroll = ()=>{ nav.classList.toggle('scrolled', window.scrollY>10); };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  const closeIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>';
  hamburgerBtn.innerHTML = menuIcon;
  hamburgerBtn.addEventListener('click', ()=>{
    const open = mobileMenu.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', open?'true':'false');
    hamburgerBtn.innerHTML = open ? closeIcon : menuIcon;
  });
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    mobileMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded','false');
    hamburgerBtn.innerHTML = menuIcon;
  }));

  const userMenuToggle = document.getElementById('userMenuToggle');
  const userDropdown = document.getElementById('userDropdown');
  userMenuToggle.addEventListener('click', (e)=>{
    e.stopPropagation();
    const open = userDropdown.classList.toggle('open');
    userMenuToggle.setAttribute('aria-expanded', open?'true':'false');
  });
  document.addEventListener('click', (e)=>{
    if(!userDropdown.contains(e.target) && e.target!==userMenuToggle){
      userDropdown.classList.remove('open');
    }
  });
  document.getElementById('logoutBtn').addEventListener('click', async ()=>{
    await logoutUser();
    updateAuthUI();
    renderProducts();
    userDropdown.classList.remove('open');
    showToast('Sesión cerrada. ¡Vuelve pronto!');
  });

  document.querySelector('[data-nav-home]').addEventListener('click', ()=>{
    document.getElementById('mobileMenu').classList.remove('open');
  });
}

/* ---------------- modales ---------------- */
function openModal(id){
  document.getElementById(id).classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(id){
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow='';
}
function setupModals(){
  document.querySelectorAll('[data-close-modal]').forEach(btn=>{
    btn.addEventListener('click', ()=>closeModal(btn.getAttribute('data-close-modal')));
  });
  document.querySelectorAll('.modal-overlay').forEach(ov=>{
    ov.addEventListener('click', (e)=>{ if(e.target===ov) closeModal(ov.id); });
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key==='Escape'){
      document.querySelectorAll('.modal-overlay.open').forEach(ov=>closeModal(ov.id));
    }
  });
  document.getElementById('openLoginBtn').addEventListener('click', ()=>openModal('loginOverlay'));
  document.getElementById('gotoRegister').addEventListener('click', ()=>{ closeModal('loginOverlay'); openModal('registerOverlay'); });
  document.getElementById('gotoLogin').addEventListener('click', ()=>{ closeModal('registerOverlay'); openModal('loginOverlay'); });
}

/* ---------------- formularios de sesión ---------------- */
function setupAuthForms(){
  document.getElementById('loginForm').addEventListener('submit', async (e)=>{
    e.preventDefault();
    const errBox = document.getElementById('loginError');
    errBox.classList.remove('show');
    const email = document.getElementById('loginEmail').value;
    const pw = document.getElementById('loginPassword').value;
    try{
      const user = await loginUser(email, pw);
      currentUser = user;
      updateAuthUI();
      renderProducts();
      closeModal('loginOverlay');
      document.getElementById('loginForm').reset();
      showToast('¡Bienvenido de nuevo, '+user.name.split(' ')[0]+'!','success');
    }catch(err){
      errBox.textContent = err.message;
      errBox.classList.add('show');
    }
  });

  document.getElementById('registerForm').addEventListener('submit', async (e)=>{
    e.preventDefault();
    const errBox = document.getElementById('registerError');
    errBox.classList.remove('show');
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const pw = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerConfirm').value;
    if(pw!==confirm){
      errBox.textContent='Las contraseñas no coinciden.';
      errBox.classList.add('show');
      return;
    }
    try{
      const user = await registerUser(name, email, pw);
      currentUser = user;
      updateAuthUI();
      renderProducts();
      closeModal('registerOverlay');
      document.getElementById('registerForm').reset();
      showToast('¡Cuenta creada! Ya puedes comentar y dejar tu opinión.','success');
      burstConfetti(window.innerWidth/2, window.innerHeight/2);
    }catch(err){
      errBox.textContent = err.message;
      errBox.classList.add('show');
    }
  });
}

/* ---------------- formulario de opiniones ---------------- */
function setupReviewForm(){
  const starWrap = document.getElementById('reviewStars');
  starWrap.innerHTML = [1,2,3,4,5].map(v=>'<button type="button" data-value="'+v+'" aria-label="'+v+' estrella'+(v>1?'s':'')+'">'+ICONS.star+'</button>').join('');
  const starButtons = starWrap.querySelectorAll('button');
  function setStars(val){
    starWrap.setAttribute('data-rating', val);
    starButtons.forEach(b=>b.classList.toggle('active', Number(b.getAttribute('data-value'))<=val));
  }
  starButtons.forEach(b=>{
    b.addEventListener('click', ()=>setStars(Number(b.getAttribute('data-value'))));
    b.addEventListener('mouseenter', ()=>{
      const v=Number(b.getAttribute('data-value'));
      starButtons.forEach(x=>x.classList.toggle('active', Number(x.getAttribute('data-value'))<=v));
    });
  });
  starWrap.addEventListener('mouseleave', ()=>setStars(Number(starWrap.getAttribute('data-rating'))));

  if(currentUser){ document.getElementById('reviewName').value = currentUser.name; }

  document.getElementById('reviewForm').addEventListener('submit', async (e)=>{
    e.preventDefault();
    const errBox = document.getElementById('reviewError');
    errBox.classList.remove('show');
    
    if(!currentUser){
      errBox.textContent='Debes iniciar sesión para dejar una opinión.';
      errBox.classList.add('show');
      openModal('loginOverlay');
      return;
    }

    const comment = document.getElementById('reviewComment').value.trim();
    const rating = Number(starWrap.getAttribute('data-rating'))||0;
    
    if(rating<1){
      errBox.textContent='Selecciona al menos una estrella.';
      errBox.classList.add('show');
      return;
    }
    if(!comment){
      errBox.textContent='Escribe tu comentario antes de enviar.';
      errBox.classList.add('show');
      return;
    }

    try{
      const review = { comment, rating };
      await addReview(review);
      renderReviews();
      const form = document.getElementById('reviewForm');
      const btn = form.querySelector('button[type="submit"]');
      const rect = btn.getBoundingClientRect();
      form.reset();
      setStars(0);
      if(currentUser){ document.getElementById('reviewName').value = currentUser.name; }
      showToast('¡Gracias por tu opinión!','success');
      burstConfetti(rect.left+rect.width/2, rect.top);
    }catch(err){
      errBox.textContent = err.message;
      errBox.classList.add('show');
    }
  });
}

/* ---------------- inicio ---------------- */
async function init(){
  setupNav();
  setupModals();
  setupAuthForms();
  renderValues();
  renderTeam();
  try{
    await loadSession();
    await loadProducts();
    await loadReviews();
  }catch(e){
    console.error('Error cargando datos', e);
    products = DEFAULT_PRODUCTS.map(p=>({...p}));
  }
  updateAuthUI();
  renderProducts();
  renderReviews();
  setupReviewForm();
}

document.addEventListener('DOMContentLoaded', init);
})();