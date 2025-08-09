document.addEventListener('DOMContentLoaded', function(){
  const year = new Date().getFullYear();
  const y = document.getElementById('year');
  if(y) y.textContent = year;
  const y2 = document.getElementById('year2');
  if(y2) y2.textContent = year;

  const navToggle = document.getElementById('navToggle');
  const nav = document.querySelector('.nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', ()=>{
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // simple contact form handler (placeholder). Replace with backend/email integration.
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      // gather form data if needed
      alert('Thank you! Your message was received (placeholder). Add your email backend to send actual messages.');
      form.reset();
    });
  }
});
