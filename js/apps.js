function carregarTela(tela) {

    if (tela === "home") {
        document.getElementById("conteudo").innerHTML = `
            <div class="card">
                <h2>🏠 Dashboard</h2>
                <p>Sistema interno da empresa</p>
            </div>
        `;
    }

    if (tela === "colaboradores") {
        document.getElementById("conteudo").innerHTML = `
            <div class="card">
                <h2>👥 Colaboradores</h2>

                <input placeholder="Nome"><br><br>
                <input placeholder="Telefone"><br><br>

                <button>Salvar</button>
            </div>
        `;
    }

    if (tela === "equipamentos") {
        document.getElementById("conteudo").innerHTML = `
            <div class="card">
                <h2>💻 Equipamentos</h2>

                <input placeholder="Tipo"><br><br>
                <input placeholder="Marca"><br><br>

                <button>Salvar</button>
            </div>
        `;
    }

    if (tela === "admin") {
        document.getElementById("conteudo").innerHTML = `
            <div class="card">
                <h2>🔐 Admin</h2>

                <input placeholder="Email"><br><br>
                <input placeholder="Senha"><br><br>

                <button>Criar usuário</button>
            </div>
        `;
    }
}
