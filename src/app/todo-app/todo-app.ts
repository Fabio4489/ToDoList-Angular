import { Component, OnInit, signal } from '@angular/core';
import { TodoItem } from '../compoonent/todo-item/todo-item';
import { TodoAdd } from '../compoonent/todo-add/todo-add';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo-service';

@Component({
  selector: 'app-todo-app',
  imports: [TodoItem, TodoAdd],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css',
})
export class TodoApp implements OnInit{
  // todo$ = inject(TodoService);
  constructor(private todo$: TodoService) { }
  listaTodo!: Array<Todo>;

  ngOnInit(): void {
    this.stampa();
  }

  stampa(): void{
    this.listaTodo = this.todo$.getTodo();
  }

  aggiungiLista(item: Todo){
    this.todo$.addTodo(item);
    this.stampa();
  }

  cancellaTodo(index: number){
    this.todo$.deleteTodo(index)
  }
  completaTodo(index: number){    
    this.todo$.checkedTodo(index)
  }

  title = signal("La tua APP ToDo Preferita");
}
