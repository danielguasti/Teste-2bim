import leilao from "./leilão";
import usuario from "./usuario"


class lance {
    comprador: usuario;
    leilao: leilao;
    valor: number;

    constructor(comprador: usuario, leilao: leilao, valor: number) {
        this.comprador = comprador;
        this.leilao = leilao;
        this.valor = valor;
    }
}

export default lance;