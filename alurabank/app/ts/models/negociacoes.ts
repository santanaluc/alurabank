class Negociacoes {
                        //ou Negociacao[]
    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    //retorna um novo array de objetos com a cópia do array original para evitar que o array original seja excluído
    paraArray(): Negociacao[] {

        return [].concat(this._negociacoes);
    }
}