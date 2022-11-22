import './nav.js'
import '../css/formulario-pagamento.css'


/*1 inp*/const numero_do_cartao_input = document.querySelector('#numero-cartao');
/*2 inp*/const name_input  = document.querySelector('#nome');
/*3 inp*/const data_input = document.querySelector('#data-vencimento');
/*4 inp*/const codigo_seguranca_input = document.querySelector('#codigo-seguranca');

numero_do_cartao_input.setAttribute('placeholder','Número');
name_input.setAttribute('placeholder','Nome');


/*1 out*/const card_number = document.querySelector('.card-number');
/*2 out*/const card_name  = document.querySelector('.card-holder');
/*3 out*/const card_data = document.querySelector('.expiration');
/*4 out*/const card_codigo_seguranca = document.querySelector('.ccv-card');


const btn_confirmar = document.querySelector('.btn-confirmar');

/*chamadas de eventos---------------------------------------------------------👇*/ 

numero_do_cartao_input.addEventListener('input',function(){
card_number.textContent = numero_do_cartao_input.value;
})/*numero cartao👆*/


name_input.addEventListener('input',function(){
    card_name.textContent = name_input.value;
})/*nome cartao👆*/

data_input.addEventListener('input',function(){
    card_data.textContent = data_input.value; 
})/*data cartao👆*/

codigo_seguranca_input.addEventListener('input',function(){
    card_codigo_seguranca.textContent = codigo_seguranca_input.value;
})