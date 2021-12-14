import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../../../app-routing.module';


@NgModule({
  declarations: [
    AsideMenuComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    AppRoutingModule
  ],
  exports: [
      AsideMenuComponent
  ]
})
export class AsideMenuModule { }
