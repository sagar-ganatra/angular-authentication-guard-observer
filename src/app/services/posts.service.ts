import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Post } from '../models/post.model';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  get(): Promise<Post[]> {
    return this.http.get('/api/posts')
                    .toPromise()
                    .then(res => res.json() as Post[])
                    .catch(err => {
                      console.log(1, err);
                      return Promise.reject(err);
                    });
  }

}
