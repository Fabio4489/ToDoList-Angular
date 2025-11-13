import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly key: string = "arrayTodos";
  private listaTodo: Array<Todo> = [];
  
  getTodo(): Todo[]{
    let arraySalJSON = localStorage.getItem(this.key);
    if(arraySalJSON){
      this.listaTodo = JSON.parse(arraySalJSON);
    }
    return this.listaTodo;
  }

  addTodo(item: Todo): void{
    this.listaTodo = this.getTodo();
    this.listaTodo.push(item);
    localStorage.setItem(this.key, JSON.stringify(this.listaTodo));
  }

  deleteTodo(index: number): void{
    this.listaTodo.splice(index, 1);
    localStorage.setItem(this.key, JSON.stringify(this.listaTodo));
  }

  checkedTodo(index: number): void{    
    this.listaTodo[index].completato = !this.listaTodo[index].completato;
    localStorage.setItem(this.key, JSON.stringify(this.listaTodo));
  }
}
