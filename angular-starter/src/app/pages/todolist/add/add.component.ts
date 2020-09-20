import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { TodoListService } from '../todo.service';

@Component({
  selector: 'app-product',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddTodoComponent implements OnInit{

  pObj:any={};
  images:any=[];
  websites:any=[];
  tagsList:any=[];
  brands:any=[];
  categories:any=[];
  productFamilies:any=[];
  taxes:any=[];
  manufracturer:any=[];
  user:any=[];
  permission :string;
  perm :string;
  isNew :boolean = false;

  constructor( private route : ActivatedRoute, private router : Router, private todoService: TodoListService){

  }
  ngOnInit () {
    this.getNew();
  }

  getNew(){
    const id = +this.route.snapshot.paramMap.get('id');
    id ? this.todoService.get(id)
    .subscribe(data => {
    this.pObj=data;

    }):this.isNew=true;
  }


  save(): void {
      if(this.isNew){
        this.todoService.add(this.pObj)
        .subscribe(result => {
          this.pObj=result;
          console.log(this.pObj)
          this.pObj && this.pObj.id && this.router.navigate(['todo/'])
        })
      }
      else {
          this.todoService.update(this.pObj).subscribe(aResult=>{
           alert("Updated Successfully")
          });
      }
  }

  goTolist(){
    this.router.navigate(['/todo']);
  };

}
