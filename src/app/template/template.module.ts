import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TemplateComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedModule,
  ]
})
export class TemplateModule { }
