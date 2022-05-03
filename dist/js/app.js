import { NegociacaoController } from "./controllers/negociacao-Controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('nao foi possivel inciar a aplicação, verificar se o form existe');
}
