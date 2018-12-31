import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {InboxPage} from '../inbox/inbox'

@NgModule({
  declarations: [
    LoginPage,
    InboxPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],entryComponents:[
    InboxPage
  ]
})
export class LoginPageModule {}
