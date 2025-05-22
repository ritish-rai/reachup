 const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Close all items except the one clicked
    faqItems.forEach((el) => {
      if (el !== item) {
        el.classList.remove('active');
        el.querySelector('.faq-icon').textContent = '↓';
      }
    });

    // Toggle current item
    const isActive = item.classList.contains('active');
    item.classList.toggle('active');
    item.querySelector('.faq-icon').textContent = isActive ? '↓' : '↑';
  });
});
