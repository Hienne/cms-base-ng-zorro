import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { TodoService } from './services/todo.service';
import { ITodo } from './models/todo.interface';

export const todoTask = (page: number, limit: number) => {
  return inject(TodoService).getTodos(page, limit).subscribe();
};

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
})
export class KanbanComponent {
  private todoService = inject(TodoService);

  todo: ITodo[] = [];

  done: ITodo[] = [];

  constructor() {
    this.todoService.getTodos(1, 10).subscribe((res) => {
      res.forEach((el) => {
        if (el.completed) {
          this.done.push(el);
        } else {
          this.todo.push(el);
        }
      });
    });
  }

  drop(event: CdkDragDrop<ITodo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
