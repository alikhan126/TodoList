import { Component,OnInit } from '@angular/core';
import { TodoListService} from '../todo.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


declare var require: any;

@Component({
    selector: 'app-dt-editing',
    templateUrl: './todo-editing.component.html',
    styleUrls: ['./todo-editing.component.scss']
})

export class TodoEditComponent {
    editing = {};
    rows = [];
    products :any[];
    totalRecords:number;
    temp = [];
    manufacturers =[];
    permission :string;
    perm :string;
    closeResult: string;

    // @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;

    constructor(private modalService: NgbModal, private todoservice: TodoListService, private router: Router) {
    }
    ngOnInit() {
        this.todoservice.getAll().subscribe(data => {
            this.rows = data;
            this.temp = data
        });
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    add() {
        this.router.navigate(['/todo/0']);
    }

    // Editing content code
    updateValue(event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.todoservice.get(this.rows[rowIndex]['id']).subscribe(data => {
            this.rows[rowIndex] = data;
            this.rows[rowIndex][cell] = event.target.value;
            this.todoservice.update(this.rows[rowIndex]).subscribe(data => {
                this.todoservice.getAll().subscribe(data => {
                    this.rows = data;
                });
            });
        });
    }

    delete(event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.todoservice.delete(this.rows[rowIndex]['id']).subscribe(data => {
            this.rows[rowIndex] = data;
            this.todoservice.getAll().subscribe(data => {
                this.rows = data;
            });
        });
    }
}