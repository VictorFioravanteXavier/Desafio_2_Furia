import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TopFansPostsComponent } from './top-fans-posts/top-fans-posts.component';
import { MatchInsightsComponent } from './match-insights/match-insights.component';


@NgModule({
  declarations: [
    TemplateComponent,
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
export class TemplateModule { }
