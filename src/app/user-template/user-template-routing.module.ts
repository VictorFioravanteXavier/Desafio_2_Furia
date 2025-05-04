import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTemplateComponent } from './user-template.component';
import { HomeComponent } from './home/home.component';
import { RecomendedPostsComponent } from './recomended-posts/recomended-posts.component';

const routes: Routes = [
  { path: '', component: UserTemplateComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'recomended-posts', component: RecomendedPostsComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTemplateRoutingModule { }
