import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const appRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: HomePageComponent
    },
    {
        path: 'blog',
        canActivate: [AuthGuard],
        component: BlogPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutes {}