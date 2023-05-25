import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { SupportComponent } from './support/support.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SectionHeaderComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule
  ],
  exports: [
    NavBarComponent,
    SectionHeaderComponent
  ]
})
export class CoreModule { }
