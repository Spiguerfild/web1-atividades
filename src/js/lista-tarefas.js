import './nav.js'
import '../css/lista-tarefas.css'


let btn_add = document.querySelector('#btn-adicionar');
let lista_trfs = document.querySelector('#lista-tarefas');


btn_add.addEventListener('click',function(){
   let input_value = document.querySelector('#input-nova-tarefa').value

   let nova_li =  document.createElement('li')
    nova_li.className = 'tarefa'
    
   nova_li.innerHTML = `
	<div>${input_value}</div>
  <button class="btn-excluir">Excluir</button>
`
lista_trfs.appendChild(nova_li)
})
d