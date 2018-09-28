import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface ProfileData {
  email: string;
  date: string;
  uid: string;
  name: string;
  age: number;
  photo: string; 
  review: string; 
  areasOfInterest: string[]; 
  level: string
}

@Injectable({
  providedIn: 'root'
})

export class ProfilesService {

  private ProfileDataCollection: AngularFirestoreCollection<ProfileData>
  ProfileData: Observable<ProfileData[]>;

  constructor(private afs: AngularFirestore) {
    this.ProfileDataCollection = afs.collection<ProfileData>('ProfileData');
    this.ProfileData = this.ProfileDataCollection.valueChanges();
  }


  addProfileData(email: string, uid: string) {
    const data: ProfileData = {
      email: email,
      date: new Date().toISOString(),
      uid: uid,
      name: null,
      age: null,
      photo: null,
      review: null,
      areasOfInterest: null,
      level: null
    }
    return this.ProfileDataCollection.add(data);
  }

  addProfile(email: string, uid: string, name: string, review:string  ) {
    const id = this.afs.createId();

    const data: ProfileData = {
      email: email,
      date: new Date().toISOString(),
      uid: uid,
      name: name,
      age: null,
      photo: '../../../img/Avatar-facebook.png',
      review: review,
      areasOfInterest: null,
      level: "0"
    }
    return this.ProfileDataCollection.add(data);
  }



  getProfileData() {
    return this.ProfileData;
  }

}

