import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
 {
  path: '',
  component: TemplateComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // Redireciona para o dashboard por padrão
    { path: 'dashboard', component: DashboardComponent }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
