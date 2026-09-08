(function(){
/* Small, optional enhancements. Research content and links remain in the HTML. */
'use strict';
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('navigation');
function closeMenu(){
  if(!toggle || !nav) return;
  toggle.setAttribute('aria-expanded','false');
  nav.classList.remove('is-open');
}
if(toggle && nav){
  toggle.addEventListener('click',()=>{
    const opened = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded',String(!opened));
    nav.classList.toggle('is-open',!opened);
  });
  document.addEventListener('keydown',event=>{
    if(event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true'){
      closeMenu(); toggle.focus();
    }
  });
  nav.addEventListener('click',event=>{if(event.target.closest('a')) closeMenu();});
}
document.querySelectorAll('[data-filter-group]').forEach(group=>{
  const controls=group.querySelector('[data-filter-controls]');
  const items=[...group.querySelectorAll('[data-item]')];
  const buttons=[...group.querySelectorAll('[data-filter]')];
  const search=group.querySelector('[data-search-input]');
  const counter=group.querySelector('.filter-count');
  const empty=group.querySelector('.empty-state');
  let category='all';
  if(controls) controls.hidden=false;
  function update(){
    const query=(search ? search.value : '').trim().toLocaleLowerCase();
    let count=0;
    items.forEach(item=>{
      const matches=(category==='all'||item.dataset.category===category)&&
        (!query||(item.dataset.search||'').toLocaleLowerCase().includes(query));
      item.hidden=!matches;
      if(matches) count++;
    });
    if(counter) counter.textContent=`Showing ${count} of ${items.length}`;
    if(empty) empty.hidden=count>0;
  }
  buttons.forEach(button=>button.addEventListener('click',()=>{
    category=button.dataset.filter;
    buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    update();
  }));
  if(search) search.addEventListener('input',update);
  update();
});
document.querySelectorAll('[data-playlist]').forEach(player=>{
  const button=player.querySelector('.load-video');
  const id=player.dataset.playlist;
  if(!button||!id||!/^PL[A-Za-z0-9_-]+$/.test(id)) return;
  button.addEventListener('click',()=>{
    const frame=document.createElement('iframe');
    frame.src='https://www.youtube-nocookie.com/embed/videoseries?list='+encodeURIComponent(id);
    frame.title='Chris Lehnert - Website research video playlist';
    frame.allow='encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen=true;
    frame.referrerPolicy='strict-origin-when-cross-origin';
    frame.tabIndex=0;
    player.replaceChildren(frame);
    frame.focus();
  });
});

})();
