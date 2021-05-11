import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { domInject, logarTempoDeExecucao } from "../helpers/decorators/index";


export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;
    
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemview = new MensagemView('#mensagemView')

    constructor() {

        this._negociacoesView.update(this._negociacoes);

    }
    
    adiciona(event: Event) {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (this._diaUtil(data)) {
            this._mensagemview.update('Somente negociações em dias úteis, por favor')
            return
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        )

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);

        this._mensagemview.update("Negociação adicionada com sucesso.")

    }

    private _diaUtil (data: Date) {
        return data.getDay() != DiaSemana.Sabado && data.getDay() != DiaSemana.Domingo; 
    }
}

enum DiaSemana {
    Domingo, 
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}