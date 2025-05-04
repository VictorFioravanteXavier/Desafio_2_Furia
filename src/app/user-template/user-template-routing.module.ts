import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTemplateComponent } from './user-template.component';
import { HomeComponent } from './home/home.component';
import { RecomendedPostsComponent } from './recomended-posts/recomended-posts.component';
import { PersonalizeExperienceComponent } from './personalize-experience/personalize-experience.component';

const routes: Routes = [
  { path: '', component: UserTemplateComponent, children: [
    {path: '', component: PersonalizeExperienceComponent},
    {path:'home', component: HomeComponent },
    {path: 'recomended-posts', component: RecomendedPostsComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTemplateRoutingModule { }
