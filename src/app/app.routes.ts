import { Routes } from '@angular/router';
import { HomeView } from './home/views/home-view/home-view';

export const routes: Routes = [
    {path: 'home', component: HomeView},
    {path: '', pathMatch: 'full', redirectTo: '/home'}
];
