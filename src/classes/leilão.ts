import usuario from "./usuario";

class leilao {
    produto: string;
    preco: number;
    datalimite: Date;
    dono : usuario;
    lances: string;

    constructor (produto: string, preco: number, datalimite: Date, dono: usuario, lances: string) {
        this.produto = produto;
        this.preco = preco;
        this.datalimite = datalimite;
        this.dono = dono;
        this.lances = lances;

    }

}

export default leilao;