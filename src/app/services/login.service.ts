import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user.model';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(user: User): Promise<any> {
    if (user.name === 'Sagar' && user.password === 'test') {
      return Promise.resolve(true);
    }

    return Promise.reject(false);
  }

}
