import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  posts:Array<Post> = [];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.get().then(res => {
      this.posts = res;
    });
    
  }

}
