const themeButton = document.querySelector('#theme');

themeButton.addEventListener('click', () => {
	document.body.classList.toggle('light-theme');
});
