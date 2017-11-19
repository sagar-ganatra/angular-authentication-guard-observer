import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  private isUserLoggedIn = new BehaviorSubject<boolean>(false);
  redirectUrl = '';

  constructor(private loginService: LoginService) {
    this.isUserLoggedIn.next(false);
  }
  
  login(user): Promise<any> {
    return this.loginService.login(user)
                            .then(() => {
                              this.setIsUserLoggedIn(true);
                            })
                            .catch(() => {
                              this.setIsUserLoggedIn(false);
                            });
  }

  logout(): void {
    this.setIsUserLoggedIn(false);
  }

  setIsUserLoggedIn(message: boolean): void {
    this.isUserLoggedIn.next(message);
  }

  getIsUserLoggedIn(): Observable<any> {
    return this.isUserLoggedIn.asObservable();
  }
}
