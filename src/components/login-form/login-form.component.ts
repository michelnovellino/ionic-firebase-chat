import { Component, EventEmitter,Output} from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

//models
import {Account} from '../../models/account/account.model';
import {LoginResponse} from '../../models/login/login-response.model';
//providers
import { AuthProvider } from '../../providers/auth/auth';


@Component({
  selector: 'login-form-component',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account
  @Output() LoginStatus: EventEmitter<LoginResponse>;
  constructor(
    private navCtrl: NavController, 
    private toastCtrl: ToastController,
    private authProv: AuthProvider,
    ) {
      this.LoginStatus = new EventEmitter<LoginResponse>();
    }

  async login(){
    
    const result = await this.authProv.signInWithEmailAndPassword(this.account)
    this.LoginStatus.emit(result)

  }
  
  navigateToPage(pageName:string):void{
    console.log(pageName)
    pageName === 'ChatTabsPage' ? this.navCtrl.setRoot('ChatTabsPage')  : this.navCtrl.push(pageName)
  }
}
