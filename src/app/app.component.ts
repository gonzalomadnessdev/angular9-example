import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "test-app";
  form! : FormGroup;
  list : any[]= [];//tuve que agregar ": any"
  error : string = "";
  errorState : boolean = false;

  constructor(private formBuilder : FormBuilder){
  

  }

  ngOnInit(){
    this.form = this.formBuilder.group({
      item : new FormControl()
    });
  }

  addItem(){
    if (this.form.get("item")?.value) {
      const item ={
        completed : false,
        value: this.form.get("item")?.value//me autoagrego "?"
      };
      this.list.push(item);
      this.error = "" ; 
      this.errorState = false;

    }else { this.error = "Please insert a valid task" ; this.errorState = true }
  }

  deleteItem(position : number){ //tuve que especificar el tipo :number
    this.list.splice(position, 1)
  }

  completeTask(position : number){
    this.list[position].completed = true;
  }  

  undoCompleteTask(position : number){
    this.list[position].completed = false;
  }

}
