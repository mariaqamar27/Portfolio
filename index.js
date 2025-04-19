// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  
    // Smooth scroll to top
    const backToTopBtn = document.querySelector(".back-to-top");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  
    // Highlight navbar links as user scrolls
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav .right a");
  
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  
    // Optionally: Add scroll reveal animation to skills or education
    const revealElements = document.querySelectorAll(".Skills, .box, .box1, .box2");
  
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
  
      revealElements.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          el.classList.add("show");
        } else {
          el.classList.remove("show");
        }
      });
    };
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on load too
  });
  
  //Footer
  function showThankYouMessage() {
    document.getElementById('contactForm').style.display = 'none'; // Hide the form
    document.getElementById('thankYouMessage').style.display = 'block'; // Show the thank you message
    return false; // Prevent form from submitting (you'll still be able to send the email)
  }
  
