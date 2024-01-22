let header = document.querySelector('#header');

let description = 985;
let acceuil = 0;
let projets = 1955;
let contact = 4115;

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(window.scrollY > 300) {
        header.classList.add('header-reduce');
    }else{
        header.classList.remove('header-reduce');
    }
});

function goTo(x){
    window.scrollTo({
        top: x,
        behavior: 'smooth'
    });
}