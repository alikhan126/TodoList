import { TodoPageComponent } from './../todolist/todo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoEditComponent } from './editing/todo-editing.component';
import { AddTodoComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
     component: TodoEditComponent,
    data: {
      title: 'Todo Editing Page'
    },    
  },
  
  {
    path: 'detail',
     component: TodoPageComponent,
    data: {
      title: 'Todo Page'
    },    
  },
  {
    path: ':id',
     component: AddTodoComponent,
    data: {
      title: 'Add Todo Page'
    },    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule { }
