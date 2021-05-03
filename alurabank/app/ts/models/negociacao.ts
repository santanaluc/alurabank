export class Negociacao {

    constructor(readonly data:Date, readonly quantidade:number, readonly valor:number) {} //depois de criada nao pode ser alterada, por isso o underline.

    //get serve para mostrar os dados.

    //retorna o valor total de negociacoes
    get volume() {
        return this.quantidade * this.valor
    }
}