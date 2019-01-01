import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController} from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.model';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
 
  }

  Login(event:LoginResponse){
    console.log(event)
    if(!event.error){
      this.toastCtrl.create({
        message:'Inicio de sesion exitoso, lo redirigiremos en instantes',
        duration: 3000
       }).present()
      this.navCtrl.setRoot('ProfilePage')
    }else{
      this.toastCtrl.create({
        message: event.error.message,
        duration: 3000
       }).present()
    }
  }


}
