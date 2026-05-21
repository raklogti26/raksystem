
function carregarTela(tela) {

    if (tela === "dashboard") {
        document.getElementById("conteudo").innerHTML = `
            <div class="card">
                <h2>Dashboard</h2>
                <p>Bem-vindo ao sistema interno</p>
            </div>
        `;
    }

    if (tela === "colaboradores") {
        document.getElementById("conteudo").innerHTML = `
            <div class="card">
                <h2>Colaboradores</h2>

                <input placeholder="Nome" id="nome"><br><br>
                <input placeholder="Telefone" id="telefone"><br><br>

                <button onclick="salvarColaborador()">Salvar</button>

                <div id="lista"></div>
            </div>
        `;
        carregarColaboradores();
    }

    if (tela === "equipamentos") {
        document.getElementById("conteudo").innerHTML = `
            <div class="card">
                <h2>Equipamentos</h2>

                <input placeholder="Tipo" id="tipo"><br><br>
                <input placeholder="Marca" id="marca"><br><br>

                <button onclick="salvarEquipamento()">Salvar</button>
            </div>
        `;
    }

    if (tela === "cargos") {
        document.getElementById("conteudo").innerHTML = `
            <div class="card">
                <h2>Cargos</h2>
                <input placeholder="Nome do cargo" id="cargo">
                <button onclick="salvarCargo()">Salvar</button>
            </div>
        `;
    }

    if (tela === "areas") {
        document.getElementById("conteudo").innerHTML = `
            <div class="card">
                <h2>Áreas</h2>
                <input placeholder="Nome da área" id="area">
                <button onclick="salvarArea()">Salvar</button>
            </div>
        `;
    }

    if (tela === "admin") {
        document.getElementById("conteudo").innerHTML = `
            <div class="card">
                <h2>Admin</h2>
                <input placeholder="Email"><br><br>
                <input placeholder="Senha"><br><br>
                <button>Criar usuário</button>
            </div>
        `;
    }
}

/* DADOS TEMP (depois vira Firebase) */
let colaboradores = [];

function salvarColaborador() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    colaboradores.push({ nome, telefone });
    carregarColaboradores();
}

function carregarColaboradores() {
    let html = "";

    colaboradores.forEach((c, i) => {
        html += `
            <div class="card">
                ${c.nome} - ${c.telefone}
                <button onclick="excluir(${i})">Excluir</button>
            </div>
        `;
    });

    document.getElementById("lista").innerHTML = html;
}

function excluir(i) {
    colaboradores.splice(i, 1);
    carregarColaboradores();
}
