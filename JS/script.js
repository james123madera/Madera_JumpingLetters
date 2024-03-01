const letters = document.querySelectorAll('.letter');

letters.forEach(letter => {
    letter.addEventListener('click', () => {
        letter.classList.add('active');
        setTimeout(() => {
            letter.classList.remove('active');
        }, 1000); // Remove 'active' class after 1 second
    });
});

document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('click', () => {
        letter.style.animation = 'jump 1s ease-in-out';
    });
});