// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Nav scroll state
const nav = document.querySelector('.nav');
const handleScroll = () => {
  if (window.scrollY > 10) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

// Subtle parallax on glows
const glow1 = document.querySelector('.glow-1');
const glow2 = document.querySelector('.glow-2');
let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
  targetX = (e.clientX / window.innerWidth - 0.5) * 40;
  targetY = (e.clientY / window.innerHeight - 0.5) * 40;
});

function animateGlow() {
  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;
  if (glow1) glow1.style.transform = `translate(${currentX}px, ${currentY}px)`;
  if (glow2) glow2.style.transform = `translate(${-currentX}px, ${-currentY}px)`;
  requestAnimationFrame(animateGlow);
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  animateGlow();
}
