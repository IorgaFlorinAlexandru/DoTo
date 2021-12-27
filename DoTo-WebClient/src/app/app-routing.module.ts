import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
    { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
    { path: 'tasks', canActivate: [AuthGuard], loadChildren: () => import('./features/tasks/tasks.module').then(m => m.TasksModule) },
    { path: 'projects', canActivate: [AuthGuard], loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule) },
    { path: 'resources', canActivate: [AuthGuard], loadChildren: () => import('./features/resources/resources.module').then(m => m.ResourcesModule) },
    { path: '',  redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
