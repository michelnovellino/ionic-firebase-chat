import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {ComponentsModule} from '../components/components.module';

//firebase
import {  AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from 'angularfire2/auth'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {FIREBASE_CONFIG} from'./app.firebase.config'

import { AuthProvider } from '../providers/auth/auth';
import { DataProvider } from '../providers/data/data';


 @NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    DataProvider,
    AngularFireDatabaseModule
  ]
})
export class AppModule {}
