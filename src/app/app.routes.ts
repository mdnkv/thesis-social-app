import { Routes } from '@angular/router';
import { HomeView } from './home/views/home-view/home-view';
import { UserView } from './users/views/user-view/user-view';

export const routes: Routes = [
    {path: 'home', component: HomeView},
    {path: 'user/:userId', component: UserView},
    {path: '', pathMatch: 'full', redirectTo: '/home'}
];
