const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
  
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const text = "Hi, I'm Ryan!"; // The text to animate
  const speed = 175 // Typing speed
  let index = 0;

  const typewriterElement = document.getElementById("typewriter");
  const handIcon = "👋🏼 "; // Ensure the hand is always there

  function typeWriter() {
      if (index < text.length) {
          typewriterElement.innerHTML = handIcon + text.substring(0, index + 1); // Keep hand and update text
          index++;
          setTimeout(typeWriter, speed);
      }
  }

  typeWriter(); // Start animation
});



