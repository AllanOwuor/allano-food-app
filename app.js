document.addEventListener('DOMContentLoaded', function() {
    const moonIcon = document.querySelector('.fa-moon');

    moonIcon.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
