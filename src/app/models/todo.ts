export class Todo {
    nome!: string;
    completato!: boolean;
    constructor(newNome: string, newCompletato: boolean){
        this.nome = newNome;
        this.completato = newCompletato;
    }
}
