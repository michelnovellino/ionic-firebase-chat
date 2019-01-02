import { Component } from '@angular/core';
import { Profile } from '../../models/profile/profile.model';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { Subscription } from 'rxjs';
import { User } from 'firebase';


@Component({
  selector: 'edit-profile-form-component',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent {

  profile = {} as Profile;
  private authenticatedUser$ : Subscription
  private authenticatedUser: User
  constructor(private ofAuth: AuthProvider,private data: DataProvider) {

     this.authenticatedUser$ = this.ofAuth.getAuthenticatedUser().subscribe((user:User)=>{
      this.authenticatedUser = user
    })

  }

  async saveProfile(){
    console.log(this.profile)
    if(this.authenticatedUser){
      const result = await this.data.saveProfile(this.authenticatedUser,this.profile)
      console.log(result)
    }else{
      console.log('error')
    }
  }
}
