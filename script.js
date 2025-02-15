const form = document.getElementById('form-cadastro');
const nome = [];
const ddd = [];
const numero = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const validacao = validarEntrada();
    
    if (validacao === "valido") {
        addLinha();
        attTabela();
        exibirMensagem("✅ Cadastrado com sucesso!", "sucesso", "./imagens/okay.png");
    } else {
        const iconeErro = "./imagens/error.png"; // Ícone de erro
        exibirMensagem(validacao, "erro", iconeErro);
    }
});

// Função para validar os dados e retornar mensagens específicas
function validarEntrada() {
    const inputNomeUsuario = document.getElementById('nome-usuario').value.trim();
    const inputDddUsuario = document.getElementById('ddd-usuario').value.trim();
    const inputTelefoneUsuario = document.getElementById('telefone-usuario').value.trim();

    if (inputNomeUsuario === '' || inputDddUsuario === '' || inputTelefoneUsuario === '') {
        return "⚠️ Todos os campos devem ser preenchidos!";
    }

    if (!/^\d{2}$/.test(inputDddUsuario)) {
        return "⚠️ DDD inválido! Deve ter exatamente 2 números.";
    }

    if (!/^\d{9}$/.test(inputTelefoneUsuario)) {
        return "⚠️ Número inválido! Deve ter exatamente 9 números.";
    }

    return "valido"; // Se tudo estiver correto, retorna "valido"
}

// Exibir mensagem dinâmica com ícone
function exibirMensagem(texto, tipo, iconeSrc) {
    const mensagemDiv = document.getElementById('mensagem');
    const iconeMensagem = document.getElementById('icone-mensagem');
    const textoMensagem = document.getElementById('texto-mensagem');

    textoMensagem.innerText = texto;
    mensagemDiv.className = tipo; // Define a classe CSS (sucesso ou erro)

    if (iconeSrc) {
        iconeMensagem.src = iconeSrc;
        iconeMensagem.style.display = "block"; // Exibe o ícone
    } else {
        iconeMensagem.style.display = "none"; // Esconde o ícone se não houver
    }

    mensagemDiv.style.display = 'flex'; // Exibe a mensagem

    // Esconde a mensagem após 3 segundos
    setTimeout(() => {
        mensagemDiv.style.display = 'none';
    }, 3000);
}

function addLinha(){
    const inputNomeUsuario = document.getElementById('nome-usuario').value.trim();
    const inputDddUsuario = document.getElementById('ddd-usuario').value.trim();
    const inputTelefoneUsuario = document.getElementById('telefone-usuario').value.trim();

    nome.push(inputNomeUsuario);
    ddd.push(inputDddUsuario);
    numero.push(inputTelefoneUsuario);

    let linha = "<tr>";
    linha += `<td>${inputNomeUsuario}</td>`;
    linha += `<td>${inputDddUsuario}</td>`;
    linha += `<td>${inputTelefoneUsuario}</td>`;
    linha += "</tr>";

    linhas += linha;

    document.getElementById('nome-usuario').value = '';
    document.getElementById('ddd-usuario').value = '';
    document.getElementById('telefone-usuario').value = '';
}

function attTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}