let txt1 = document.querySelector('.elh2hero');
let txt2 = document.querySelector('.elh1hero');


let funcionaparecer = (entradas, observador) => {
    entradas.forEach((entry) => {
        if(entry.isIntersecting){
            txt1.classList.add('apareceelh2hero');
            txt2.classList.add('apareceelh1hero');
            
        }else{
            txt1.classList.remove('apareceelh2hero');
            txt2.classList.remove('apareceelh1hero');
            
        }
    })
};

let observador = new IntersectionObserver(funcionaparecer, {});

observador.observe(txt1);
observador.observe(txt2);


let loslinks = document.querySelector('.linksbox');
let boxmenuicon = document.querySelector('.menubox');
boxmenuicon.addEventListener('click', () => {
    if(boxmenuicon.click){
        loslinks.classList.toggle('aparecelinksbox');
    }
});
window.addEventListener('touchmove', () => {
    if(window.Touch){
        loslinks.classList.remove('aparecelinksbox');
    }
})