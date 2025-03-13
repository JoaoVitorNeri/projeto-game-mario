const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const pulo = () => {
    console.log('Pulo acionado');
    mario.classList.add('pulo');
    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 600);
}

const loop = setInterval(() => { 
    const tuboPosicao = tubo.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');
    

    if (tuboPosicao <=140 && tuboPosicao > 0 && marioPosicao < 90) {

       tubo.style.animation =- 'none';
       tubo.style.left = `${tuboPosicao}px`;

       mario.style.animation =- 'none';
       mario.style.bottom = `${marioPosicao}px`;

       mario.src = 'assets/imagens/game-over.png';
       mario.style.width = '50px';
       
       
    }



})


document.addEventListener('keydown', pulo);
