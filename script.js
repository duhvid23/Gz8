gsap.registerPlugin(ScrollTrigger);

// Animate elements with .animate-in
document.querySelectorAll('.animate-in').forEach(el => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});

// Glitch effect on headings
document.querySelectorAll('.glitch-text').forEach(header => {
  ScrollTrigger.create({
    trigger: header,
    start: "top 80%",
    once: true,
    onEnter: () => {
      header.classList.add('glitch-active');
      setTimeout(() => header.classList.remove('glitch-active'), 500);
    }
  });
});

// Parallax background effect
gsap.to(".parallax-bg", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});

// Pulse/glow effect for buttons when they enter view
document.querySelectorAll('.btn').forEach(btn => {
  ScrollTrigger.create({
    trigger: btn,
    start: "top 85%",
    once: true,
    onEnter: () => {
      gsap.fromTo(btn, 
        { scale: 0.9, boxShadow: "0 0 0px transparent" }, 
        { scale: 1, boxShadow: "0 0 15px #00F5FF", duration: 0.6, ease: "power2.out" }
      );
    }
  });
});
