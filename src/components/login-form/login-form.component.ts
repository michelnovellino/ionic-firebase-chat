import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-form-component',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  text: string;

  constructor(private navCtrl: NavController) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
  }

  
  navigateToPage(pageName:string):void{
    console.log(pageName)
    pageName === 'ChatTabsPage' ? this.navCtrl.setRoot('ChatTabsPage')  : this.navCtrl.push(pageName)
  }
}
