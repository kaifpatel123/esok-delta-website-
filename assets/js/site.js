(function(){
var d=document,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
d.body.classList.add('grain');
var council=[
 ['President','Oversees Club operations, chairs council meetings and reports to members every three months.'],
 ['Co-President','Shares the President’s duties, handles member grievances and manages collaborations with other clubs.'],
 ['Director of Communications','Shares Club activity with the university, builds stakeholder networks and manages the Club’s media handles.'],
 ['Director of Events','Ideates, plans and runs Club events, and maintains the event calendar and post-event reports.'],
 ['Treasurer','Oversees Club finances, quarterly statements and the budget proposal, and procures sponsorships.'],
 ['Events Coordinator','Supports event logistics, scheduling, volunteers and on-ground execution.'],
 ['Design Head','Leads posters, social graphics and event collateral, and maintains the visual identity.'],
 ['Publicity Head','Runs outreach and promotion, builds cross-promotion links and tracks engagement.']
];
d.querySelectorAll('.team .tm[data-council-index]').forEach(function(card){var member=council[Number(card.dataset.councilIndex)];if(!member)return;card.querySelector('small').textContent=member[0];card.querySelector('p').textContent=member[1]});
// split headings into line-reveal spans
d.querySelectorAll('[data-lines]').forEach(function(h){h.innerHTML=h.innerHTML.split('<br>').map(function(t){return '<span class="ln"><span>'+t+'</span></span>'}).join('')});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.18});
d.querySelectorAll('.fade,[data-lines]').forEach(function(e){io.observe(e)});
setTimeout(function(){d.querySelectorAll('.hero [data-lines]').forEach(function(e){e.classList.add('in')})},150);
// page curtain
d.querySelectorAll('a[data-go]').forEach(function(a){a.addEventListener('click',function(ev){ev.preventDefault();var c=d.querySelector('.curtain');c.classList.add('up');setTimeout(function(){location.href=a.getAttribute('href')},720)})});
try{if(sessionStorage.getItem('lift'))d.querySelector('.curtain').classList.add('lift')}catch(e){}
// scroll-linked: hero expand, horizontal track, parallax
var hero=d.querySelector('.hero'),hs=d.querySelector('.hs'),tr=d.querySelector('.hs .track'),bar=d.querySelector('.bar i'),par=[].slice.call(d.querySelectorAll('[data-s]'));
function prog(el){var r=el.getBoundingClientRect();return Math.min(1,Math.max(0,-r.top/(r.height-innerHeight)))}
function sizeHorizontalSection(){if(!hs||!tr)return;if(rm||innerWidth<=820){hs.style.height='auto';return}var travel=Math.max(1,tr.scrollWidth-innerWidth+56);hs.style.height=(innerHeight+travel)+'px'}
sizeHorizontalSection();
addEventListener('resize',sizeHorizontalSection);
if(d.fonts&&d.fonts.ready)d.fonts.ready.then(sizeHorizontalSection);
function tick(){
 if(hero){var p=prog(hero);hero.style.setProperty('--c',(18*(1-Math.min(1,p*2.2))).toFixed(2)+'%');var h1=hero.querySelector('h1');h1.style.transform='scale('+(1+p*.18)+')';h1.style.opacity=1-Math.max(0,p-.7)*3}
 if(hs&&tr&&innerWidth>820){var q=prog(hs);tr.style.transform='translateX('+(-q*(tr.scrollWidth-innerWidth+56))+'px)';if(bar)bar.style.width=q*100+'%'}
 par.forEach(function(e){var r=e.getBoundingClientRect();e.style.transform='translateY('+((r.top+r.height/2-innerHeight/2)*-parseFloat(e.dataset.s)).toFixed(1)+'px)'});
 requestAnimationFrame(tick)}
if(!rm)tick();
d.querySelectorAll('.pw button').forEach(function(b,i,all){b.addEventListener('click',function(){all.forEach(function(x){x.classList.remove('on')});b.classList.add('on');d.getElementById('pwt').textContent=b.dataset.t})});
try{sessionStorage.setItem('lift','1')}catch(e){}
})();
