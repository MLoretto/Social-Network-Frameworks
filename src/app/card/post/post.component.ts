import { Component, OnInit, Input } from '@angular/core';
import { WallComponent } from '../../pages/wall/wall.component';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() dataUser: any;
  @Input() infoUser: any;
  
  valid:boolean;
  constructor(private getProfile: ProfilesService) {

  }

  ngOnInit() {
    if(this.infoUser.uid ===this.dataUser.uid){
      this.valid = true;
    }else{
      this.valid = false;
    }
  }
  deletePost(){
    if(this.dataUser.Id !== null)
      this.getProfile.deleteProfile(this.dataUser.Id);
  }

  updateLike(){
    if(this.dataUser.Id !== null)
      this.getProfile.likeUpdateProfile(this.dataUser.Id, this.dataUser.level );
  }
}
