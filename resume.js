// ===== DOWNLOAD RESUME (PDF) - standalone file =====
document.addEventListener('click', function (e) {
  const btn = e.target.closest('#downloadResume');
  if (!btn) return;
  e.preventDefault();
  console.log('[resume] button clicked');

  const sec=t=>`<h2 style="font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#8a6d1f;border-bottom:1px solid #c9a84c;padding-bottom:3px;margin:16px 0 8px">${t}</h2>`;
  const item=(title,sub,date)=>`
    <div style="page-break-inside:avoid;margin-bottom:7px">
      <div style="display:flex;justify-content:space-between;font-size:12px">
        <strong>${title}</strong><span style="color:#555">${date}</span>
      </div>
      <div style="font-size:11.5px;color:#444">${sub}</div>
    </div>`;

  const html=`
  <div style="font-family:Arial,Helvetica,sans-serif;color:#111;padding:28px 34px;width:700px;background:#fff">
    <div style="text-align:center;border-bottom:2px solid #c9a84c;padding-bottom:10px">
      <div style="font-size:26px;font-weight:bold;letter-spacing:1px">APOCALIPSE C. BUSCATO</div>
      <div style="font-size:12px;margin-top:4px">BS Computer Science · Citi Global College</div>
      <div style="font-size:11px;color:#444;margin-top:6px">
        0992-150-2112 · apocalipsebuscato29@gmail.com<br>
        Blk 10 Lot 46 Ph. 3, Brgy. Dila, Golden City, Sta. Rosa, Laguna 4026
      </div>
    </div>

    ${sec('Profile')}
    <p style="font-size:11.5px;line-height:1.6;margin:0">
      Fresh graduate with a Bachelor of Science in Computer Science from Citi Global College.
      Hands-on experience in IT, administrative work, and game development, with a completed
      300-hour OJT. Eager to grow, learn continuously, and contribute meaningfully to the tech industry.
    </p>

    ${sec('Education')}
    ${item('BS Computer Science','Citi Global College, Cabuyao, Laguna','2025–2026')}
    ${item('Senior High School','Citi Global College','2020–2021')}
    ${item('Junior High School','Citi Global College','2018–2019')}
    ${item('Intermediate School','Dila Elementary School','2013–2014')}

    ${sec('Work Experience')}
    ${item('Administrative &amp; IT Intern (OJT, 300 hrs)','RNH Realty &amp; Management Inc.','Jul–Oct 2025')}
    ${item('Student Assistant','Citi Global College','2022–2025')}
    ${item('Pantry · Fry Man','KFC Balibago (Best Pantry Award, Dec 2022)','2021–2022')}
    ${item('Fry Man','Jollibee Cabuyao','2021')}
    ${item('Delivery Helper · Bagger','Mandaue Foam','2020–2021')}

    ${sec('Projects')}
    ${item('Dino Chase – Browser Game','HTML, CSS, JavaScript · apobuscato.github.io/Sir-Nur-GameDevelopment-/','')}

    ${sec('Awards &amp; Leadership')}
    <ul style="font-size:11.5px;line-height:1.6;margin:0;padding-left:18px">
      <li>Innovation and Technical Excellence Award – ACSCT (May 9, 2025)</li>
      <li>Technical Officer – ACSCT 2024–2025</li>
      <li>Asst. Public Information Officer – CGCians Supreme Student Council (2024)</li>
      <li>Event Organizer – Citi Global College Panegyric 2024 &amp; 2025</li>
      <li>Facilitator – Ethical Hacking, Data Landscape, and Advanced Database seminars (2024)</li>
      <li>Wadhwani Foundation – 16 Basic Level skills certificates (April 14, 2024)</li>
    </ul>

    ${sec('Skills')}
    <p style="font-size:11.5px;line-height:1.6;margin:0">
      Programming · Problem-Solving &amp; Logical Analysis · Critical Thinking · Management ·
      Time Management · Teamwork &amp; Collaboration · Adaptability · Attention to Detail ·
      IT Support · Data Management · Microsoft Office
    </p>
    <p style="font-size:11.5px;margin:6px 0 0"><strong>Languages:</strong> Filipino, Bisaya, English</p>

    ${sec('References')}
    <div style="font-size:11.5px;line-height:1.6">
      <strong>Rey Anne Nidea</strong> (Colleague) – 0912-757-7052 · reyannenidea5@gmail.com<br>
      <strong>Aubrey Shane C. Buscato</strong> (Sister) – 0906-597-7512 · aubreyshanecbuscato@gmail.com<br>
      <strong>Angelo C. Buscato</strong> (Brother) – 0991-912-6819
    </div>
  </div>`;



  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  const el = wrap.firstElementChild;

  function printFallback() {
    const w = window.open('', '_blank');
    if (!w) { alert('Paki-allow ang pop-up para ma-save as PDF.'); return; }
    w.document.write('<html><head><title>Apocalipse_Buscato_Resume</title></head><body style="margin:0">' + html + '</body></html>');
    w.document.close();
    w.focus();
    setTimeout(() => w.print(), 500);
  }

  if (typeof html2pdf === 'undefined') {
    console.warn('[resume] html2pdf not loaded, using print fallback');
    printFallback();
    return;
  }

  html2pdf().set({
    margin: 0,
    filename: 'Apocalipse_Buscato_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['css', 'legacy'] }
  }).from(el).save().catch(function (err) {
    console.error('[resume] html2pdf failed:', err);
    printFallback();
  });
});
