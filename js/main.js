// Fade-in animation
const observedSections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

observedSections.forEach(section => observer.observe(section));

// Smooth scroll active link highlighting
const navLinks = document.querySelectorAll('.navbar ul li a');
const pageSections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';

  pageSections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'section');
    }
  });
});

const skillFills = document.querySelectorAll('.progress-fill');

window.addEventListener('scroll', () => {
  skillFills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) {
      fill.style.width = fill.style.width; // This triggers the CSS width animation
    }
  });
});

