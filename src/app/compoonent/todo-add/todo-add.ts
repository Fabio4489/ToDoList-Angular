import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css',
})
export class TodoAdd {
  // @Input() count = 0;
  nome: string = "";
  completato: boolean = false;
  todo!: Todo ;
  @Output() nuovoTodo = new EventEmitter<Todo>();
  // @Input() listaTodos: Array<Todo> = [];

  addTodo (){
    if(this.nome.trim() != ""){
      this.todo = new Todo(this.nome, this.completato);
      this.nuovoTodo.emit(this.todo);
      this.nome = "";
    }else{
      alert("Errore nell'inerimento")
    }
  }
}
