/* 
    [x] Saber quando o botão for clicado
    [x] Mudar o posicionamento do modal
    [] Fazer a máscara ficar visível
    [] Quando clicar na máscara, fechar o modal
*/

const modal = document.querySelector(".modal");
const mascaraModal = document.querySelector(".mascara-modal");


function mostrarModal() {
    modal.style.left = '50%';
    mascaraModal.style.visibility = 'visible';
}

function esconderModal() {
    modal.style.left = '-50%';
    mascaraModal.style.visibility = 'hidden';
}