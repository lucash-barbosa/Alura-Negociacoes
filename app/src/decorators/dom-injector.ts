export function domInjector(seletor: string) {
    return function (target: any, propertyKey: string) {
        console.log(`Modificando pototype ${target.constructor.name} e adicionando getter na propriedade${propertyKey}`)
        let elemento: HTMLElement;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor) as HTMLElement;
                console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`)
            }
            return elemento;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        )
    }
}