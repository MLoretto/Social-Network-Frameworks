import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-wall',
  templateUrl: './background-wall.component.html',
  styleUrls: ['./background-wall.component.css']
})
export class BackgroundWallComponent implements OnInit {

  public titulo: string = 'muro'; 
  constructor() { }

  ngOnInit() {
  }

}
