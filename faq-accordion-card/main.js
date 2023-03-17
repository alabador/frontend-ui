const accordions = document.querySelectorAll('.accordion');

for (let i=0; i < accordions.length; i++){
    accordions[i].addEventListener('click', () => {
        this.classList.toggle('active');
    })
}