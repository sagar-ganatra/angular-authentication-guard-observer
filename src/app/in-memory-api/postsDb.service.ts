import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class PostsDbService implements InMemoryDbService  {

  createDb() {
    let posts = [
      {
        id: 1,
        title: 'Blog post 1',
        body: 'Blog post 1 - body'
      },
      {
        id: 2,
        title: 'Blog post 2',
        body: 'Blog post 2 - body'
      }
    ];

    return { posts };
  }
}
