import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: User = new User('','');
  isUserLoggedIn: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.authService.isLoggedIn;
  }

  onLogin(user: User) {
    this.authService.login(user)
                     .then(res => {
                       this.authService.setIsUserLoggedIn(true);
                       this.router.navigateByUrl(this.authService.redirectUrl || '');
                     })
                     .catch(err => {
                       this.authService.setIsUserLoggedIn(false);
                     });
  }

}
