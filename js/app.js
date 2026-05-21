function carregarTela(tela) {

    if (tela === "home") {
        document.getElementById("conteudo").innerHTML = `

        <div class="titulo">PORTAL DA EMPRESA</div>

        <div class="card-info">
            <p><strong>Empresa:</strong> Sua Empresa Ltda</p>
            <p><strong>CNPJ:</strong> 00.000.000/0001-00</p>
            <p><strong>Responsável:</strong> TI Corporativo</p>
        </div>

        <div class="grid">

            <div class="card">
                <h4>Colaboradores</h4>
                <div class="valor">10</div>
            </div>

            <div class="card">
                <h4>Equipamentos</h4>
                <div class="valor">8</div>
            </div>

            <div class="card">
                <h4>Ativos</h4>
                <div class="valor">6</div>
            </div>

        </div>
        `;
    }

    if (tela === "colaboradores") {
        document.getElementById("conteudo").innerHTML = `
        <div class="titulo">Colaboradores</div>

        <div class="card-info">
            <input placeholder="Nome"><br><br>
            <input placeholder="Telefone"><br><br>
            <button>Salvar</button>
        </div>
        `;
    }

    if (tela === "equipamentos") {
        document.getElementById("conteudo").innerHTML = `
        <div class="titulo">Equipamentos</div>

        <div class="card-info">
            <input placeholder="Tipo"><br><br>
            <input placeholder="Marca"><br><br>
            <button>Salvar</button>
        </div>
        `;
    }

    if (tela === "admin") {
        document.getElementById("conteudo").innerHTML = `
        <div class="titulo">Administração</div>

        <div class="card-info">
            <input placeholder="Email"><br><br>
            <input placeholder="Senha"><br><br>
            <button>Criar usuário</button>
        </div>
        `;
    }
}
