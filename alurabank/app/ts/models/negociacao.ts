class Negociacao {

    constructor(private _data:Date, private _quantidade:number, private _valor:number) {} //depois de criada nao pode ser alterada, por isso o underline.

    //get serve para mostrar os dados.
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    //retorna o valor total de negociacoes
    get volume() {
        return this._quantidade * this._valor
    }
}