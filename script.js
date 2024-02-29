function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function novoTamanho(){
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function esconderMenu(){
    itens.style.display = 'none'
}

const myObserver = new IntersectionObserver ((observar) => {
    observar.forEach((entry)=> {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })

})

const elements = document.querySelectorAll('.animacao')

elements.forEach((element) => myObserver.observe(element))


