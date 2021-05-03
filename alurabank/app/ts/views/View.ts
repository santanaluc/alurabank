export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;
    // o parâmetro opcional tem que ser o ultimo do constructor
    constructor(seletor: string, escapar:boolean = false) {

        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(model: T) {

        let template = this.template(model);

        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        }
        
        this._elemento.html(this.template(model));

        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}
