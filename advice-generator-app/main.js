const reroll = document.querySelector('.reroll-div');
const adviceNumber = document.querySelector('#advice-id');
const quoteText = document.querySelector('.advice-quote');

reroll.addEventListener('click', changeQuote);

function changeQuote () {
    fetch('https://api.adviceslip.com/advice')
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            adviceNumber.textContent = response.slip.id;
            quoteText.textContent = response.slip.advice;
        });
};