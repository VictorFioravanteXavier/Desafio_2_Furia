import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './admin-template-routing.module';
import { AdminTemplateComponent } from './admin-template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TopFansPostsComponent } from './top-fans-posts/top-fans-posts.component';
import { MatchInsightsComponent } from './match-insights/match-insights.component';


@NgModule({
  declarations: [
    AdminTemplateComponent,
    DashboardComponent,
    TopFansPostsComponent,
    MatchInsightsComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedModule,
  ]
})
export class AdminTemplateModule { }
