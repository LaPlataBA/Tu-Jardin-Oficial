let txt1 = document.querySelector('.banertxt1');

let txt2 = document.querySelector('.banertxt2');

let funcionaparecer = (entradas, observe) => {
    entradas.forEach((entry) => {
        if(entry.isIntersecting){
            txt1.classList.add('aparecetxt1');
            txt2.classList.add('aparecetxt2')
        }else{
            txt1.classList.remove('aparecetxt1');
            txt2.classList.remove('aparecetxt2')
        }
    })
};

let observador = new IntersectionObserver(funcionaparecer, {});

observador.observe(txt1);
observador.observe(txt2);