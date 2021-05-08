export function logarTempoDeExecucao() {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOrigina = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const retorno = metodoOrigina.apply(this, args);
            return retorno;
        }

        return descriptor;
    }
}