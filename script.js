const themeButton = document.querySelector('#theme');
const themeMenu = document.querySelector('#theme-menu');
const themeOptions = document.querySelectorAll('.theme-option');
const navButtons = document.querySelectorAll('[data-page]');

const getStoredTheme = () => localStorage.getItem('portfolio-theme');

const applyTheme = (themeName) => {
  const validThemes = ['toffee', 'green', 'purple', 'red', 'blue'];
  const nextTheme = validThemes.includes(themeName) ? themeName : 'toffee';

  document.body.classList.remove('light-theme', 'theme-purple', 'theme-red', 'theme-blue');

  if (nextTheme === 'green') {
    document.body.classList.add('light-theme');
  } else if (nextTheme !== 'toffee') {
    document.body.classList.add(`theme-${nextTheme}`);
  }

  localStorage.setItem('portfolio-theme', nextTheme);

  themeOptions.forEach((option) => {
    const isSelected = option.dataset.theme === nextTheme;
    option.classList.toggle('selected', isSelected);
    option.setAttribute('aria-checked', String(isSelected));
  });
};

const themeName = getStoredTheme() || 'toffee';
applyTheme(themeName);

const navigateTo = (page) => {
	window.location.href = page;
};

navButtons.forEach((button) => {
	button.addEventListener('click', () => {
		navigateTo(button.dataset.page);
	});
});

if (themeButton && themeMenu) {
  const toggleMenu = () => {
    const isHidden = themeMenu.classList.toggle('hidden');
    themeButton.setAttribute('aria-expanded', String(!isHidden));
  };

  themeButton.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  themeOptions.forEach((option) => {
    option.addEventListener('click', () => {
      applyTheme(option.dataset.theme);
      themeMenu.classList.add('hidden');
      themeButton.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!themeMenu.contains(event.target) && !themeButton.contains(event.target)) {
      themeMenu.classList.add('hidden');
      themeButton.setAttribute('aria-expanded', 'false');
    }
  });
}
