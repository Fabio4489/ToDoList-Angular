import { ITodo } from "../interfaces/models/ITodo";

export class Todo implements ITodo{
    nome!: string;
    completato!: boolean;
    constructor(newNome: string, newCompletato: boolean){
        this.nome = newNome;
        this.completato = newCompletato;
    }
}
