// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀ Light';
} 
else{
  themeToggle.textContent = '🌙 Dark';
  }
});

