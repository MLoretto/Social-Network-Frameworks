import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  constructor(private servicio: ProfilesService) { }

  ngOnInit() {
  }

}
