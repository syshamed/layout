import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {
form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
        username: '',
        password: ''
    });
    this.form.patchValue({
      username: 'User1'
    });
  }
 

  ngOnInit() {
  }


}
