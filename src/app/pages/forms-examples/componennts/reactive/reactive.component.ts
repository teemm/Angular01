import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   name: new FormControl('Benedict'),
    //   email: new FormControl(''),
    //   message: new FormControl('')
    // });

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.pattern('[0-9]')]]
    });
  }

  onSubmit(form: FormGroup) {
    // console.log('Valid?', form.valid);
    console.log(form, form.valid);
  }

}
