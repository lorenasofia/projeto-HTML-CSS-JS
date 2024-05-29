document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.querySelector('.change-theme-button');

    themeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeButton.textContent = 'Modo Claro (colocar icon)';
        } else {
            themeButton.textContent = 'Modo Escuro (colocar icon)';
        }
    });
});
