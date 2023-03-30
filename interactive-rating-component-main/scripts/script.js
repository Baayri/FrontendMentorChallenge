const buttons = document.querySelectorAll('.button-group button');

let buttonId = 0;

function setActiveButton(button) {
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
    button.classList.add('active');
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        setActiveButton(button);
        buttonId = button.id
    });
});

function toggleDisplay() {
    const card = document.getElementById('card');
    const thanksCard = document.getElementById('thanks-card');
    card.style.display = 'none';
    thanksCard.style.display = "flex";
    document.getElementById("selected-id").innerHTML = `You selected ${buttonId} out of 5`
}


