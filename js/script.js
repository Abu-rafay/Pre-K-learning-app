const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('show');
  });
}

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slide-btn.prev');
const nextBtn = document.querySelector('.slide-btn.next');
let currentSlide = 0;

function showSlide(index) {
  if (!slides.length) return;
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

if (slides.length && prevBtn && nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);
}

const modal = document.getElementById('infoModal');
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');
const closeModal = document.querySelector('.close-modal');
const modalTriggers = document.querySelectorAll('[data-title][data-text]');

if (modal && modalTitle && modalText && modalTriggers.length) {
  modalTriggers.forEach((item) => {
    item.addEventListener('click', () => {
      modalTitle.textContent = item.dataset.title;
      modalText.textContent = item.dataset.text;
      modal.classList.add('show');
    });
  });
}

if (closeModal && modal) {
  closeModal.addEventListener('click', () => modal.classList.remove('show'));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  });
}

const topBtn = document.querySelector('.top-btn');
if (topBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const quizGroups = document.querySelectorAll('.quiz, .game-card');
quizGroups.forEach((group) => {
  const buttons = group.querySelectorAll('.quiz-btn');
  const result = group.querySelector('.quiz-result');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.correct === 'true') {
        result.textContent = 'Great job! That is correct!';
        result.style.color = '#2f9f4a';
      } else {
        result.textContent = 'Nice try! Try again!';
        result.style.color = '#e45d62';
      }
    });
  });
});
