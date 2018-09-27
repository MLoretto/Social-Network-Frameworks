import { Component, OnInit, Input } from '@angular/core';
import { WallComponent } from '../../pages/wall/wall.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() dataUser: string[];

  constructor() {

  }

  ngOnInit() {
  }

}
