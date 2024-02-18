document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardImageSrc = card.querySelector('img').getAttribute('src');
            const logoImage = document.querySelector('.logo img');
            logoImage.setAttribute('src', cardImageSrc);
        });
    });

    const moonIcon = document.querySelector('.fa-moon');

    moonIcon.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

function myfunc() {
    alert("Selection added to cart");
}
