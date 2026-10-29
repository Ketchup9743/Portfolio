const showcaseBtn = document.getElementById('view-showcase');
const homeBtn = document.getElementById('back');

showcaseBtn.addEventListener('click', function() {
  window.location.href = 'showcase.html';
});

homeBtn.addEventListener('click', function() {
  window.location.href = 'index.html';
});
