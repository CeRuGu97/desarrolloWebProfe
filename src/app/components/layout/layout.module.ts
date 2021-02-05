import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShareModule } from 'src/app/shared/share.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [LayoutComponent, DashboardComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ShareModule,
    NgbModule
  ],
  bootstrap: [DashboardComponent],
  exports: [DashboardComponent],
})
export class LayoutModule { }
