import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ProfilesService } from '../../services/profiles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css',]
})
export class WallComponent implements OnInit {



  infoUser: any;
  dataProfile: any;
  dataUser: any;

  profileList: Observable<any[]>;

  constructor(private getDataUser: AuthService, private getProfile: ProfilesService) {



  }


  ngOnInit() {

    this.getDataUser.getInfoUser().subscribe(info => {
      this.infoUser = info;
    });

    this.profileList = this.getProfile.getProfileData();


    this.getProfile.getProfileData().subscribe(profiles => {
      this.dataProfile = profiles;
      const info = this.infoUser;
      this.dataUser =  profiles.filter(profile => profile.uid === info.uid)[0];

      console.log(this.dataUser);

    })
  }
}
