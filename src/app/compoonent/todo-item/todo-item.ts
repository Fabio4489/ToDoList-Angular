import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { compilePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() listaTodos: Array<Todo> = [];
  @Output() indiceCanc = new EventEmitter<number>;
  @Output() indiceCompl = new EventEmitter<number>;

  completato: boolean = false;

  completatoTodo(index: number){
    this.indiceCompl.emit(index);
  }

  cancellaTodo(index: number){
    this.indiceCanc.emit(index);
  }
}
