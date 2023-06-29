const form = document.getElementById('form-contato')
const imgCelular = '<img src="./imagens/celular1.png" alt="Logo de celular" />';
const imgTelefone = '<img src="./imagens/telefone.png" alt="Logo de telefone" />';
const contato = [];
const numeros = [];
const img = document.getElementById("tipo");

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarlinha();
    atualizaTabela();
    somaTotalNumero();
    calculaContato();
})

function adicionarlinha(){
    const nomeContato = document.getElementById('nome-contato')
    const numeroTelefone = document.getElementById('numero-telefone')

    if(contato.includes(nomeContato.value)) {
        alert(`O contato ${nomeContato.value} já foi incluido`)
    } else {
        contato.push(nomeContato.value)
        numeros.push(parseInt(numeroTelefone.value))

    let linha = '<tr>'
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${numeroTelefone.value}</td>`
    linha += `<td>${img.value == "Celular" ? imgCelular : imgTelefone}</td>`;
    linha += '</tr>'

    linhas += linha;
    }

    

    document.getElementById('nome-contato').value = '';
    document.getElementById('numero-telefone').value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function somaTotalNumero() {
    const numerofinal = calculaContato();
    document.getElementById("numero-contatos").innerHTML = numerofinal;
}

function calculaContato() {
    let somaNumero = 0;
    for (let i = 0; i < numeros.length; i++) somaNumero += numeros[i];
    const tot = numeros.length;
    return numeros.length;
}

