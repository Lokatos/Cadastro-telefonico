const form = document.getElementById('form-cadastro');
const nome = [];
const ddd = [];
const numero = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recarregar a página

    if (validarEntrada()) {
        addLinha();
        attTabela();
        document.getElementById('mensagem-sucesso').style.display = 'block';

        // Esconde a mensagem após 3 segundos
        setTimeout(() => {
            document.getElementById('mensagem-sucesso').style.display = 'none';
        }, 3000);
    }
});

// Função para validar os dados
function validarEntrada() {
    const inputNomeUsuario = document.getElementById('nome-usuario').value.trim();
    const inputDddUsuario = document.getElementById('ddd-usuario').value.trim();
    const inputTelefoneUsuario = document.getElementById('telefone-usuario').value.trim();

    if (inputNomeUsuario === '' || inputDddUsuario === '' || inputTelefoneUsuario === '') {
        alert("⚠️ Todos os campos devem ser preenchidos!");
        return false;
    }

    if (!/^\d{2}$/.test(inputDddUsuario)) {
        alert("⚠️ O DDD deve ter exatamente 2 números.");
        return false;
    }

    if (!/^\d{9}$/.test(inputTelefoneUsuario)) {
        alert("⚠️ O telefone deve ter exatamente 9 números.");
        return false;
    }

    return true; // Se passou por todas as validações, retorna verdadeiro
}

function addLinha(){
    const inputNomeUsuario = document.getElementById('nome-usuario').value.trim();
    const inputDddUsuario = document.getElementById('ddd-usuario').value.trim();
    const inputTelefoneUsuario = document.getElementById('telefone-usuario').value.trim();

    nome.push(inputNomeUsuario);
    ddd.push(inputDddUsuario);
    numero.push(inputTelefoneUsuario);

    // Criando nova linha para a tabela
    let linha = "<tr>";
    linha += `<td>${inputNomeUsuario}</td>`;
    linha += `<td>${inputDddUsuario}</td>`;
    linha += `<td>${inputTelefoneUsuario}</td>`;
    linha += "</tr>";

    linhas += linha;

    // Limpar os campos após o cadastro
    document.getElementById('nome-usuario').value = '';
    document.getElementById('ddd-usuario').value = '';
    document.getElementById('telefone-usuario').value = '';
}

function attTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
