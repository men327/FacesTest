import { Component } from '@angular/core';
import { FaceService } from './face.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private faces :FaceService){
    faces.getListFaces();
  } 

}