import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTemplateRoutingModule } from './user-template-routing.module';
import { UserTemplateComponent } from './user-template.component';


@NgModule({
  declarations: [
    UserTemplateComponent
  ],
  imports: [
    CommonModule,
    UserTemplateRoutingModule
  ]
})
export class UserTemplateModule { }
