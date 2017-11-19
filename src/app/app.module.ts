import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PostsDbService } from './in-memory-api/postsDb.service';

import { AppComponent } from './app.component';
import { AppRoutes } from './app-routes.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { BlogPageModule } from './pages/blog-page/blog-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { PostsService } from './services/posts.service';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(PostsDbService),
    AppRoutes,
    HomePageModule,
    BlogPageModule,
    LoginPageModule
  ],
  providers: [
    PostsService,
    LoginService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
