import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ProfilesService } from '../../services/profiles.service';


@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css',]
})
export class WallComponent implements OnInit {

  infoUser: any;
  dataProfile: any;

  constructor(private getDataUser: AuthService, private getProfile: ProfilesService) {

  }

  ngOnInit() {
  }


  getInfoUser() {
    this.getDataUser.getInfoUser().subscribe(info => {
      this.infoUser = info;
    });
    this.getProfile.getProfileData().subscribe(profiles => {
      this.dataProfile = profiles;
      const info = this.infoUser;

      const dataUser = [];
      profiles.forEach(uid => {
        if (uid.uid === info.uid) {
          const data = [info.email, uid.name, info.uid]
          dataUser.push(data);
        }
      })

    })
  }

}
