// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Toggle mobile navbar
  const navToggle = document.querySelector('.navbar-toggler');
  const navMenu = document.querySelector('.navbar-collapse');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
  
  // Scroll effect for sticky header
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      nav.classList.add('navbar-scrolled');
    } else {
      nav.classList.remove('navbar-scrolled');
    }
  });
  
  // Carousel (if you use Bootstrap carousel or testimonial slider)
  const carousel = document.querySelector('#teamCarousel');
  if (carousel) {
    new bootstrap.Carousel(carousel, {
      interval: 4000,
      ride: 'carousel',
      pause: 'hover'
    });
  }
  
  // Optional: Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  
  window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
      scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
    }
  });
  
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  event.preventDefault()
  <a href="login.html" class="btn btn-warning btn-sm ms-3">Login</a>
<a href="register.html" class="btn btn-outline-light btn-sm ms-2">Register</a>