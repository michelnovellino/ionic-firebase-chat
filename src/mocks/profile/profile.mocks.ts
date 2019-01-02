import { Profile } from "../../models/profile/profile.model";

export const profileList: Profile[]= [
    {
    firstName: 'Michel',
    lastName: 'Novellino',
    avatar: 'assets/imgs/avatar.png',
    email: 'prueba@gmail.com',
    dateOfBird: new Date()

},
{
    firstName: 'Luis',
    lastName: 'Torres',
    avatar: 'assets/imgs/avatar.png',
    email: 'prueba2@gmail.com',
    dateOfBird: new Date()

},
{
    firstName: 'Prueba',
    lastName: 'Dos',
    avatar: 'assets/imgs/avatar.png',
    email: 'prueba3@gmail.com',
    dateOfBird: new Date() 

},
{
    firstName: 'Prueba',
    lastName: 'Tres',
    avatar: 'assets/imgs/avatar.png',
    email: 'prueba4@gmail.com',
    dateOfBird: new Date() 

}
];

export const PROFILE_LIST = profileList;