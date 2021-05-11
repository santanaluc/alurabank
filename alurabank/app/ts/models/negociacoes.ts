import { Negociacao } from './negociacao'
import { logarTempoDeExecucao } from '../helpers/decorators/index';

export class Negociacoes {
                        //ou Negociacao[]
    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    //retorna um novo array de objetos com a cópia do array original para evitar que o array original seja excluído
    @logarTempoDeExecucao(true)
    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}