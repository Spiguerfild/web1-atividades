import "./nav.js";
import "../css/lista-tarefas.css";

let btn_add = document.querySelector("#btn-adicionar");
let lista_trfs = document.querySelector("#lista-tarefas");

btn_add.addEventListener("click", function () {
  let input_value = document.querySelector("#input-nova-tarefa").value;

  let nova_li = document.createElement("li");
  nova_li.className = "tarefa";

  nova_li.innerHTML = `
	<div>${input_value}</div>
	lista_trfs.appendChild(nova_li);
`;

  

  let btn_excluir = document.createElement("button");
  btn_excluir.setAttribute("id", "deu");
  let texto = document.createTextNode("Excluir");
  btn_excluir.appendChild(texto);
  btn_excluir.className = "btn-excluir";

  nova_li.appendChild(btn_excluir);

  btn_excluir.addEventListener("click", function (event) {
    let tarefa = btn_excluir.parentElement;
    lista_trfs.removeChild(tarefa);
    console.log("hwujhdu");
  });
});
