const roles=['.NET Developer','.NET + AI Application Developer','ASP.NET Core Developer','Software Developer'];
let ri=0,ci=0;
const typing=document.querySelector('[data-typing]');
if(typing){setInterval(()=>{if(ci<roles[ri].length){typing.textContent+=roles[ri][ci++]}else{setTimeout(()=>{typing.textContent='';ci=0;ri=(ri+1)%roles.length},900)}},75)}
const menu=document.querySelector('.menu'), nav=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const canvas=document.getElementById('particles');
if(canvas){const ctx=canvas.getContext('2d');let pts=[];function resize(){canvas.width=innerWidth;canvas.height=innerHeight;pts=Array.from({length:Math.min(85,Math.floor(innerWidth/16))},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.4+.3}))}function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>canvas.width)p.vx*=-1;if(p.y<0||p.y>canvas.height)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(148,163,184,.45)';ctx.fill()}requestAnimationFrame(draw)}addEventListener('resize',resize);resize();draw()}
const filters=document.querySelectorAll('[data-filter]');const cards=document.querySelectorAll('[data-category]');filters.forEach(f=>f.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));f.classList.add('active');const v=f.dataset.filter;cards.forEach(c=>c.style.display=v==='all'||c.dataset.category===v?'block':'none')}));
const modal=document.querySelector('.modal');const modalTitle=document.querySelector('[data-modal-title]');const modalText=document.querySelector('[data-modal-text]');const gallery=document.querySelector('[data-gallery]');
document.querySelectorAll('[data-project]').forEach(btn=>btn.addEventListener('click',()=>{const d=JSON.parse(btn.dataset.project);modalTitle.textContent=d.title;modalText.textContent=d.text;gallery.innerHTML=d.images.map(x=>`<img src="${x}" alt="${d.title} screenshot" loading="lazy">`).join('');modal.classList.add('show');document.body.style.overflow='hidden'}));
function closeModal(){modal?.classList.remove('show');document.body.style.overflow=''}window.closeModal=closeModal;modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
