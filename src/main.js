import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.resultado');
    const buttonGera = document.querySelector('.button button');
    buttonGera.addEventListener('click', e => {
        cpfGerado.innerHTML = gera.geraNovoCpf();
    });
})();