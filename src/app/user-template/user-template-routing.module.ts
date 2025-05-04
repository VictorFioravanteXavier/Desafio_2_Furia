import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTemplateComponent } from './user-template.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: UserTemplateComponent, children: [
    {path: '', component: HomeComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTemplateRoutingModule { }
