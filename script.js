const showcaseBtn = document.getElementById('view-showcase');
const homeBtn = document.getElementById('back');
const contactBtn = document.getElementById('contacts');

if (showcaseBtn) {
  showcaseBtn.addEventListener('click', function() {
    window.location.href = 'showcase.html'; 
  });
}

if (homeBtn) {
  homeBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
  });
}

if (contactBtn) {
  contactBtn.addEventListener('click', function() {
    window.location.href = 'contact.html';
  });
}