const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const indicatorDots = document.querySelectorAll('.scroll-indicator a');

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.8;

      sections.forEach((sec, i) => {
        const boxTop = sec.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          sec.classList.add('visible');
        }

        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= offset - height / 2 && scrollY < offset + height / 2) {
          navLinks.forEach(link => link.classList.remove('active'));
          indicatorDots.forEach(dot => dot.classList.remove('active'));

          navLinks[i].classList.add('active');
          indicatorDots[i].classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Typing effect
    const typingElement = document.getElementById('typing');
    const words = ["Creative Developer", "UI Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = words[wordIndex];
      typingElement.textContent = current.substring(0, charIndex);

      if (!isDeleting && charIndex < current.length) {
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
      }

      setTimeout(type, isDeleting ? 50 : 100);
    };

    type();

    function smoothTransition(url) {
      document.body.classList.add('fade-out');
      setTimeout(function() {
        window.location.href = url;
      }, 800); // Match the CSS transition duration
    }
  
    // Optional: fade-in effect when page loads
    window.addEventListener('DOMContentLoaded', () => {
      document.body.style.opacity = 0;
      setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease-in-out';
        document.body.style.opacity = 1;
      }, 100);
    });
    