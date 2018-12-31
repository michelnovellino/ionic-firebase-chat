import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {Account} from '../../models/account/account.model'

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-form-component',
  templateUrl: 'register-form.component.html',
  providers: [AngularFireAuth]
})
export class RegisterFormComponent {

  account = {} as Account
  email : string;
  password: string
  
  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private OfAuth: AngularFireAuth) {
   
  }


  async Register(){
    try{
      const result = await this.OfAuth.auth.createUserWithEmailAndPassword(this.account.email,this.account.password)
      this.toastCtrl.create({
        message:`Cuenta creada exitosamente`,
        duration: 3000
       }).present()
       console.log(result)
    }catch(error){
      console.log(error)
      this.toastCtrl.create({
       message:'Ha ocurrido un error',
       duration: 3000
      }).present()
    }
  }

  navigateToPage(pageName:string):void{
    this.navCtrl.push(pageName)
  }

}
