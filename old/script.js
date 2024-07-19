window.addEventListener('DOMContentLoaded', (event) => {
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach((element) => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => element.style.opacity = 1, 100);
    });
});