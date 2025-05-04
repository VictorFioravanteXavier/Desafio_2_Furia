import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTemplateRoutingModule } from './user-template-routing.module';
import { UserTemplateComponent } from './user-template.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    UserTemplateComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserTemplateRoutingModule,
    SharedModule
  ]
})
export class UserTemplateModule { }
