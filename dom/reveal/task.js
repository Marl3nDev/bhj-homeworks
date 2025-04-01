function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
      const { top, bottom } = reveal.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) {
        reveal.classList.add('reveal_active');
      } else {
        reveal.classList.remove('reveal_active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
  