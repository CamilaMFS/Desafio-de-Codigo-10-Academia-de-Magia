const tipoMagia = prompt("Digite o tipo de magia (ataque, cura, defesa):");
const quantidade = parseInt(prompt("Digite a quantidade de mensagens a serem exibidas:"));

function obterMensagem(tipoMagia) {
    const mensagens = {
        ataque: "Usou magia de ataque!",
        cura: "Usou magia de cura!",
        defesa: "Usou magia de defesa!",
        invalido: "Tipo de magia inválido!"
    };
    return mensagens[tipoMagia] || mensagens.invalido;
}
const mensagem = obterMensagem(tipoMagia);

for (let i = 0; i < quantidade; i++) {
    console.log(mensagem);
}

// Digite o tipo de magia (ataque, cura, defesa) = cura
// Digite a quantidade de mensagens a serem exibidas = 4
//Usou magia de cura!
//Usou magia de cura!
//Usou magia de cura!
//Usou magia de cura!