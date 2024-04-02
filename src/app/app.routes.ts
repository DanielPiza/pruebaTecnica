import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
