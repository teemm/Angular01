import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-temaplte-drive',
  templateUrl: './temaplte-drive.component.html',
  styleUrls: ['./temaplte-drive.component.scss']
})
export class TemaplteDriveComponent implements OnInit {
  userName: string;
  email: string;
  nickName: string;
  password: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.userName);
  }


  onSubmit(form: NgForm) {
    console.log(form.valid);
    if (form.valid) {
      console.log(form);
      // ...our form is valid, we can submit the data
    }
  }

}
