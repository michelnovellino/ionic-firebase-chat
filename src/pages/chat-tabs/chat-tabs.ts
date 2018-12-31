import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ChatTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-tabs',
  templateUrl: 'chat-tabs.html',
})
export class ChatTabsPage {

  tab1Root: any;
  tab2Root: string;
  tab3Root: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.tab1Root = 'InboxPage'
      this.tab2Root = 'ChannelsPage'
      this.tab3Root = 'ProfilePage'


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatTabsPage');
  }

}
