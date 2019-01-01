import { Component, Output, EventEmitter } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';

//models
import {Account} from '../../models/account/account.model';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginResponse } from '../../models/login/login-response.model';


@Component({
  selector: 'register-form-component',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account
  @Output() registerStatus: EventEmitter<LoginResponse>;

  
  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private authProv: AuthProvider
    ) {
      
      this.registerStatus = new EventEmitter<LoginResponse>();
  }


  async Register(){
     try{
      const  result =  await this.authProv.createUserWithEmailAndPassword(this.account)
      this.registerStatus.emit(result)
     }catch(e){
       console.log(e)
       this.registerStatus.emit(e)
     }


  } 

  navigateToPage(pageName:string):void{
    this.navCtrl.push(pageName)
  }

}
