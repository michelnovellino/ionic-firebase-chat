//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.model';
import {LoginResponse} from '../../models/login/login-response.model'

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(
    /*public http: HttpClient*/
    private OfAuth: AngularFireAuth
    ) {
    console.log('Hello AuthProvider Provider');
  }

  getAuthenticatedUser(){
   let a = this.OfAuth.authState; 
    console.log(a)
    return a; 

  }

  async signInWithEmailAndPassword(account:Account){
    try{  
      return  <LoginResponse>{
        result: await this.OfAuth.auth.signInWithEmailAndPassword(account.email,account.password)
      };
    }catch(e){
      return <LoginResponse>{
        error: e
      };
    }
  };

  async createUserWithEmailAndPassword(account: Account){
    try{
      return <LoginResponse>{ 
       result: await this.OfAuth.auth.createUserWithEmailAndPassword(account.email,account.password)
      }
      }catch(e){
      return <LoginResponse>{
        error: e
      }
    }
  }



}
