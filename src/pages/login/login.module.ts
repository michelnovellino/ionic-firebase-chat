import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {InboxPage} from '../inbox/inbox'
/* import { AngularFireAuthModule } from 'angularfire2/auth';
 */
@NgModule({
  declarations: [
    LoginPage,
    InboxPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
/*     AngularFireAuthModule
 */  ],entryComponents:[
    InboxPage
  ]
})
export class LoginPageModule {}
