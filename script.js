const formEncomenda = document.getElementById("form-encomenda");

function formatarDataBR(dataISO) {
    if (!dataISO) return "";
    const [ano, mes, dia] = dataISO.split("-");
    return `${dia}/${mes}/${ano}`;
}

formEncomenda.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const categoria = document.getElementById("categoria").value.trim();
    const sabor = document.getElementById("sabor").value.trim();
    const tamanho = document.getElementById("tamanho").value.trim();
    const dataFormatada = formatarDataBR(document.getElementById("data-entrega").value);
    const obs = document.getElementById("observacoes").value.trim();

    const telefone = "5561999999999"; // Troque pelo número do WhatsApp da Fran (DDI + DDD + número)

    let mensagem = `Olá, *Delícias da Fran*! Gostaria de fazer uma encomenda:\n\n` +
                   `• *Cliente:* ${nome}\n` +
                   `• *Pedido:* ${categoria}\n` +
                   `• *Sabor / Opção:* ${sabor}\n` +
                   `• *Peso / Qtd:* ${tamanho}\n` +
                   `• *Data desejada:* ${dataFormatada}`;

    if (obs) {
        mensagem += `\n• *Observações:* ${obs}`;
    }

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
});