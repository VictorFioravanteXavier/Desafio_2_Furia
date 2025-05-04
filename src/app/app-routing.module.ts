import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/models/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then((l) => l.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./template/admin-template.module').then((t) => t.AdminTemplateModule),
    canActivateChild: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user-template/user-template.module').then((t) => t.UserTemplateModule),
    canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
