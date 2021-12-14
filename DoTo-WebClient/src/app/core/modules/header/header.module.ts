import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagesComponent } from './components/messages/messages.component';
import { UsermenuComponent } from './components/usermenu/usermenu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotificationComponent,
    MessagesComponent,
    UsermenuComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    NotificationComponent,
    MessagesComponent,
    UsermenuComponent
  ]
})
export class HeaderModule { }
