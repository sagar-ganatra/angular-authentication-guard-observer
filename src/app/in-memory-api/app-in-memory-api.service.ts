import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable()
export class AppInMemoryApiService implements InMemoryDbService {
  createDb() {
    let posts = [
      {
        title: 'Blog post 1',
        body: 'Blog post 1 - body'
      },
      {
        title: 'Blog post 2',
        body: 'Blog post 2 - body'
      }
    ];

    return { posts };
  }
}
