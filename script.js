const C=[{i:'images/VATAS.jpg',t:'Certificate of Participation – V.A.T.A.S. Seminar Series',s:'Violence Against Women &amp; Children, Anti-Illegal Drugs, Terrorism · March 1, 2024'},
{i:'images/best_pantry.jpg',t:'Certificate of Recognition – Best Pantry',s:'KFC Balibago · December 30, 2022'},
{i:'images/cssc_pio.jpg',t:'Certificate of Appreciation – Asst. Public Information Officer',s:'CSSC · Citi Global College College Department · June 25, 2024'},
{i:'images/CyberSecurity.jpg',t:'Certificate of Participation – Cybersecurity',s:'Cybersecurity Seminar · August 15, 2024 · Umbria Commercial Center'},
{i:'images/data_warehousing.jpg',t:'Certificate of Participation – Data Warehousing &amp; SQL',s:'Data Warehousing and SQL in Business Intelligence · August 15, 2024'},
{i:'images/exploring_advance_Database.jpg',t:'Certificate of Recognition – Facilitator',s:'Exploring Advanced Database Algorithms: Efficiency, Scalability &amp; Security · Feb 21, 2024'},
{i:'images/harnising_the_white_hatFacilitator.jpg',t:'Certificate of Appreciation – Facilitator',s:'Harnessing the White Hat: Ethical Hacking for Cyber Security · April 19, 2024'},
{i:'images/HarnisingTheWhiteHatParticipation.jpg',t:'Certificate of Participation – Ethical Hacking',s:'Harnessing the White Hat: Ethical Hacking for Cyber Security · April 19, 2024'},
{i:'images/innovation_technical_award.jpg',t:'Innovation and Technical Excellence Award',s:'Association of Computer Science &amp; Computer Technology · May 9, 2025'},
{i:'images/navigating_the_data_landscape.jpg',t:'Certificate of Appreciation – Facilitator',s:'Navigating the Data Landscape: Trends, Tools &amp; Techniques · August 15, 2024'},
{i:'images/panegyric_2024.jpg',t:'Certificate of Appreciation – Event Organizer',s:'Citi Global College Panegyric 2024 · December 1, 2024'},
{i:'images/panegyric_2025.jpg',t:'Certificate of Appreciation – Event Organizer',s:'Citi Global College Panegyric 2025 · December 1, 2025'},
{i:'images/ReaserchConference.jpg',t:'Certificate of Participation – Research Conference 2024',s:'Unveiling the Unknown: A Journey Into Research · May 20, 2024'},
{i:'images/technical_officer_2025.jpg',t:'Certificate of Appreciation – Technical Officer (ACSCT)',s:'Association of Computer Science &amp; Computer Technology 2024–2025'},
{i:'images/TheArtOfVisualization.jpg',t:'Certificate of Participation – Data Visualization',s:'The Art of Visualization: Transforming Data into Insights · August 15, 2024'},
{i:'images/unlocking_the_world_of_data.jpg',t:'Certificate of Participation – Data Science in People Analytics',s:'Unlocking the World of Data · August 15, 2024'},
{i:'images/unvieling_the_unkown.jpg',t:'Certificate of Attendance',s:'Research Conference: Unveiling the Unknown · May 20, 2024'},
{i:'images/wadhwani_problem_solving.jpg',t:'Certificate of Completion – Problem Solving &amp; Innovation',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_self_presentation.jpg',t:'Certificate of Completion – Self-Presentation',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_interpersonal.jpg',t:'Certificate of Completion – Interpersonal Skills',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_professionalism.jpg',t:'Certificate of Completion – Professionalism',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_customer_centricity.jpg',t:'Certificate of Completion – Customer Centricity',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_work_productivity.jpg',t:'Certificate of Completion – Work Productivity Tools',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_online_comm.jpg',t:'Certificate of Completion – Online Communication &amp; Data Security',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_safety.jpg',t:'Certificate of Completion – Safety Practices',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_financial.jpg',t:'Certificate of Completion – Financial Literacy',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_startup.jpg',t:'Certificate of Completion – Start-up Mindset',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_entrepreneurship.jpg',t:'Certificate of Completion – Introduction to Entrepreneurship',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_obtain_job.jpg',t:'Certificate of Completion – Obtain an Appropriate Job',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_speaking.jpg',t:'Certificate of Completion – Effective Speaking and Listening Skills',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_writing.jpg',t:'Certificate of Completion – Impactful Writing Skills',s:'Wadhwani Foundation · Basic Level · April 14, 2024'},
{i:'images/wadhwani_self_management.jpg',t:'Certificate of Completion – Self-Management',s:'Wadhwani Foundation · Basic Level · April 14, 2024'}];

let lbIdx=0;
function openLightbox(i){lbIdx=i;showLb();document.getElementById('lightbox').style.display='flex';document.body.style.overflow='hidden';}
function closeLightbox(){document.getElementById('lightbox').style.display='none';document.body.style.overflow='';}
function showLb(){const d=C[lbIdx];document.getElementById('lbImg').src=d.i;document.getElementById('lbTitle').textContent=d.t;document.getElementById('lbIssuer').textContent=d.s;document.getElementById('lbCount').textContent='Certificate '+(lbIdx+1)+' of '+C.length;}
function lbPrev(){lbIdx=(lbIdx-1+C.length)%C.length;showLb();}
function lbNext(){lbIdx=(lbIdx+1)%C.length;showLb();}
document.addEventListener('keydown',e=>{if(document.getElementById('lightbox').style.display==='flex'){if(e.key==='ArrowLeft')lbPrev();if(e.key==='ArrowRight')lbNext();if(e.key==='Escape')closeLightbox();}});

const slides=Array.from(document.querySelectorAll('#slidesTrack>.slide'));
const dotsEl=document.getElementById('slideDots');
const curEl=document.getElementById('curSlide');
document.getElementById('totalSlides').textContent=slides.length;
let cur=0,timer;
slides.forEach((_,i)=>{const d=document.createElement('button');d.className='sdot'+(i===0?' active':'');d.addEventListener('click',e=>{e.stopPropagation();clearInterval(timer);goTo(i);startAuto();});dotsEl.appendChild(d);});
function goTo(n){slides[cur].classList.remove('active');if(dotsEl.children[cur])dotsEl.children[cur].classList.remove('active');cur=(n+slides.length)%slides.length;slides[cur].classList.add('active');if(dotsEl.children[cur])dotsEl.children[cur].classList.add('active');curEl.textContent=cur+1;}
document.getElementById('prevBtn').addEventListener('click',e=>{e.stopPropagation();clearInterval(timer);goTo(cur-1);startAuto();});
document.getElementById('nextBtn').addEventListener('click',e=>{e.stopPropagation();clearInterval(timer);goTo(cur+1);startAuto();});
function startAuto(){timer=setInterval(()=>goTo(cur+1),4500);}
startAuto();

function initAnim(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        e.target.querySelectorAll('.info-item,.work-duties li,.skill-bar-fill').forEach((el,i)=>{
          el.style.transitionDelay=(i*0.07)+'s';
          el.classList.add('visible');
          if(el.classList.contains('skill-bar-fill'))el.style.width=el.dataset.width+'%';
        });
      }
    });
  },{threshold:0.08,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.reveal,.anim-left,.anim-right,.anim-scale,.anim-up,.section-label,.section-title,.about-quote,.profile-text p,.info-item').forEach(el=>obs.observe(el));
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initAnim);
else initAnim();

// Smooth scroll (skips bare "#" links like the download button)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  const h=a.getAttribute('href');
  if(!h||h.length<2)return;
  a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(h);if(t)t.scrollIntoView({behavior:'smooth'});});
});
