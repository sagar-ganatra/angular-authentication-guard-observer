import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isUserLoggedIn = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getIsUserLoggedIn().subscribe(isUserLoggedIn => {
      this.isUserLoggedIn = isUserLoggedIn;
    });
  }

  toggleLogin() {
    if (this.isUserLoggedIn) {
      this.authService.setIsUserLoggedIn(false);
      this.router.navigate(['/login']);
    } else if (this.router.url !== 'login') {
      this.authService.setIsUserLoggedIn(true);
      // this.router.navigate(['']);
    }
    
  }
}
