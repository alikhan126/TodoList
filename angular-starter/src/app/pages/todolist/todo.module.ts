import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { TodoRoutingModule } from "./todo-routing.module";

import { TodoPageComponent } from './todo.component';
import { ReactiveFormsModule,FormControl,FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { TodoEditComponent } from './editing/todo-editing.component';
import { AddTodoComponent } from './add/add.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        // FormControl,
        TodoRoutingModule ,
        Ng2SmartTableModule ,
        NgSelectModule,
        NgOptionHighlightModule,
        NgxDatatableModule
    ],
    declarations: [ 
        TodoPageComponent,
        TodoEditComponent,
        AddTodoComponent
    ]
})
export class TodoPagesModule { }
