import './nav.js'
import '../css/lista-tarefas.css'

let nova_trf = document.querySelector('#input-nova-tarefa');
let btn_add = document.querySelector('#btn-adicionar');
let lista_trfs = document.querySelector('#lista-tarefas');

btn_add.addEventListener('click',function(btn){
   let input_value = document.querySelector('#input-nova-tarefa').value

    document.createElement('li')

    nova_trf.className = 'tarefa'
    
   nova_trf.innerHTML = `
	<div>${input_value}</div>
  <button class="btn-excluir">Excluir</button>
`
lista_trfs.appendChild(nova_trf)
})
