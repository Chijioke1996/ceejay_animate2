const box = document.querySelector('.img');
const ticket = document.querySelector('.ticket');
const button = document.querySelector('#draw-button');

button.addEventListener('click', () => {
    // Spin the box
    box.style.transform = 'rotate(360deg)';
    
    // Delay the ticket pop-out animation to simulate it coming out after the spin
    setTimeout(() => {
        ticket.classList.add('show');
    }, 2000); // Delay matches the box spin duration (2 seconds)
});
