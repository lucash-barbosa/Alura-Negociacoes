import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dadoDehoje => {
                return new Negociacao(new Date, dadoDehoje.vezes, dadoDehoje.montante);
            });
        });
    }
}
