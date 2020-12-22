import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamically',
  templateUrl: './dynamically.component.html',
  styleUrls: ['./dynamically.component.scss']
})
export class DynamicallyComponent implements OnInit {
  orderForm: FormGroup;
  items: FormArray;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
    console.log([this.createItem()]);
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
    console.log(this.orderForm);
  }

}
