document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.querySelector('.change-theme-button');
    const buttonText = themeButton.querySelector('span');
    const darkThemeIcon = '/assets/icons/dark-theme.svg';
    const lightThemeIcon = '/assets/icons/dark-theme.svg';

    themeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeButton.querySelector('img').src = lightThemeIcon;
            buttonText.textContent = 'Modo Claro';
        } else {
            themeButton.querySelector('img').src = darkThemeIcon;
            buttonText.textContent = 'Modo Escuro';
        }
    });
});
