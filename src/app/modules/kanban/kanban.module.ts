import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanComponent } from './kanban.component';
import { RouterModule, Routes } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';


const ROUTES: Routes = [
  {
    path: '',
    component: KanbanComponent
  }
]

@NgModule({
  declarations: [
    KanbanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    DragDropModule
  ]
})
export class KanbanModule { }
