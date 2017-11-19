import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() onLogin = new EventEmitter();
  user: User = new User('', '');
  submitted: boolean = false;

  // user: User = new User('test','test');
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit () {
    this.submitted = true;
    this.onLogin.emit(this.user);
  }

}
