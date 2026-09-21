const themeButton = document.querySelector('#theme');
const navButtons = document.querySelectorAll('[data-page]');

const navigateTo = (page) => {
	window.location.href = page;
};

navButtons.forEach((button) => {
	button.addEventListener('click', () => {
		navigateTo(button.dataset.page);
	});
});

themeButton.addEventListener('click', () => {
	document.body.classList.toggle('light-theme');
});
