import './nav.js'
import '../css/formulario-pagamento.css'


let numero_do_cartao_input = document.querySelector("#nome")
let btn = document.querySelector(".btn-confirmar")

btn.addEventListener("click",function(){
    console.log(numero_do_cartao_input)
})

