const containers = document.querySelectorAll('.container');

containers.forEach(el => {
    const content = el.querySelector('.content')
    const plus = el.querySelector('.fa-plus')
    el.addEventListener('click', function () {
        content.classList.toggle('active');
        if (plus.classList.contains('fa-plus')) {
            plus.classList.remove('fa-plus')
            plus.classList.add('fa-minus')
        }
        else if (plus.classList.contains('fa-minus')) {
            plus.classList.remove('fa-minus')
            plus.classList.add('fa-plus')            
        }
    })
})