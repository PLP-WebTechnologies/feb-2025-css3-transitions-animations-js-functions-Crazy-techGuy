// Save user-selected color to localStorage
const saveBtn = document.getElementById('save-btn');
const colorPicker = document.getElementById('color-picker');

saveBtn.addEventListener('click', () => {
  const selectedColor = colorPicker.value;
  localStorage.setItem('themeColor', selectedColor);
  document.body.style.background = selectedColor;
});

// Load saved color on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('themeColor');
  if (savedColor) {
    document.body.style.background = savedColor;
  }
});

// Trigger animation on click
const animateBtn = document.getElementById('animate-btn');
const animatedBox = document.getElementById('animated-box');

animateBtn.addEventListener('click', () => {
  animatedBox.classList.add('bounce');
  
  // Remove the class after animation ends so it can be triggered again
  animatedBox.addEventListener('animationend', () => {
    animatedBox.classList.remove('bounce');
  }, { once: true });
});
