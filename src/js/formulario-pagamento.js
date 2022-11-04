import './nav.js'
import '../css/formulario-pagamento.css'


const numero_do_cartao_input = document.querySelector("#numero-cartao")
const nome_input  = document.querySelector
const btn_confirmar = document.querySelector(".btn-confirmar")
const card_number = document.querySelector('.card-number')


numero_do_cartao_input.addEventListener("input",function(){
card_number.textContent = numero_do_cartao_input.value
})

