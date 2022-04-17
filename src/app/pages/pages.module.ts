import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ExpositionsComponent } from './expositions/expositions.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    WorksComponent,
    ExpositionsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule, 
    FlexLayoutModule,
    FontAwesomeModule,
    NzCarouselModule,
    NzNotificationModule,
    NzSpinModule,
    NzModalModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    WorksComponent,
    ExpositionsComponent,
    ContactComponent
  ]
})
export class PagesModule { }
