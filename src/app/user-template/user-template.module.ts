import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTemplateRoutingModule } from './user-template-routing.module';
import { UserTemplateComponent } from './user-template.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { RecomendedPostsComponent } from './recomended-posts/recomended-posts.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserTemplateComponent,
    HomeComponent,
    RecomendedPostsComponent
  ],
  imports: [
    CommonModule,
    UserTemplateRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class UserTemplateModule { }
