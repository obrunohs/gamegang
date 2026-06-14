let servicos = [
  { nome: "Marido de Aluguel", descricao: "Reparos e manutenção geral" },
  { nome: "Designer", descricao: "Logos e artes digitais" }
];

function renderizar() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  servicos.forEach((s, index) => {
    lista.innerHTML += `
      <div class="card">
        <h3>${s.nome}</h3>
        <p>${s.descricao}</p>
        <button onclick="verPerfil(${index})">Ver Perfil</button>
      </div>
    `;
  });
}

function adicionarServico() {
  let nome = document.getElementById("nome").value;
  let descricao = document.getElementById("descricao").value;

  if (!nome || !descricao) return;

  servicos.push({ nome, descricao });

  document.getElementById("nome").value = "";
  document.getElementById("descricao").value = "";

  renderizar();
}

function verPerfil(i) {
  alert(
    "Perfil:\n\n" +
    servicos[i].nome +
    "\n" +
    servicos[i].descricao
  );
}

renderizar();