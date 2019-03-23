import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
  providers:[FormBuilder]
})
export class OrdersListComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  testForm: FormGroup;
  ngOnInit() {
    this.testForm = this.formBuilder.group({
      "name" : [''],
      "address": ['']
    })
  }
  submitForm(){
    console.log(this.testForm.value)
  }

}