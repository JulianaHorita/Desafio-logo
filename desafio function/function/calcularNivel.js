function calcularNivel(vitorias, derrotas) {
    //calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    //determina o nível com base no número de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 &&  <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 &&  <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 &&  <= 80) {
        nivel; "Ouro";
    } else if (vitorias >= 81 &&  <= 90) {
        nivel; "Diamante";
    } else if (vitorias >= 91 &&  <= 100) {
        nivel; "Lendário";
    } else if (vitorias > 101) {
        nivel; "Imortal";
    }

    //retorna o saldo de vitorias e o nivel
    return { saldoVitorias, nivel };
}
