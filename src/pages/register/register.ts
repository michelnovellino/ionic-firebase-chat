import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(event) {
    if (!event.error) {
      this.toastCtrl.create({
        message: ` registro exitoso! ${event.result.email}`,
        duration: 3000
      }).present();
    }else{
      console.log(event.error)
      this.toastCtrl.create({
        message: ` error de registro!`,
        duration: 3000
      }).present();
    }
  }

}
