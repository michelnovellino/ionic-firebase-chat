import { Injectable } from '@angular/core';
import  {AngularFireDatabase,AngularFireObject}  from 'angularfire2/database';
import { Profile } from '../../models/profile/profile.model';
import { User } from 'firebase';
import { take } from 'rxjs/operators';

@Injectable()
export class DataProvider {

  profileObject: AngularFireObject<Profile>

  constructor(private database: AngularFireDatabase) {
  }




  getProfile(user:User){
    this.profileObject = this.database.object(`/profiles/${user.uid}`)
    return this.profileObject.pipe(take(1))
  }

  async saveProfile(user: User ,profile: Profile){
    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    try{
      await this.profileObject.set(profile)
      return true
    }catch(e){
      console.log(e)
      return false
    }   

  }
}
