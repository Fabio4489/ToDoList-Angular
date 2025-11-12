import { Component, OnInit, signal } from '@angular/core';
import { TodoItem } from '../compoonent/todo-item/todo-item';
import { TodoAdd } from '../compoonent/todo-add/todo-add';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-app',
  imports: [TodoItem, TodoAdd],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css',
})
export class TodoApp implements OnInit{
  key: string = "arrayTodos";
  listaTodo: Array<Todo> = [];
  // todoCompletato!: Todo;
  ngOnInit(): void {
      this.startLS();
  }
  startLS(){
    let arraySalJSON = localStorage.getItem(this.key);
    if(arraySalJSON){
      this.listaTodo = JSON.parse(arraySalJSON);
    }
    localStorage.setItem(this.key, JSON.stringify(this.listaTodo));
  }
  aggiungiLista(item: Todo){
    let arraySalJSON = localStorage.getItem(this.key);
    if(arraySalJSON){
      this.listaTodo = JSON.parse(arraySalJSON);
    }
    this.listaTodo.push(item);
    localStorage.setItem(this.key, JSON.stringify(this.listaTodo));
  }

  cancellaTodo(index: number){
    this.listaTodo.splice(index, 1);
    localStorage.setItem(this.key, JSON.stringify(this.listaTodo));
    // console.log(this.listaTodo);
  }
  completaTodo(index: number){    
    this.listaTodo[index].completato = !this.listaTodo[index].completato;
    localStorage.setItem(this.key, JSON.stringify(this.listaTodo));
    // console.log(this.listaTodo );
  }

  title = signal("La tua APP ToDo Preferita");
}
