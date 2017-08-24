import { Component } from '@angular/core';
import { FaceService } from './face.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';  

  private eyes: any =[];
  private mouth: any =[];
  private nose: any =[];

  constructor(private faces: FaceService){
    faces.getListFaces().subscribe(data => {
      this.eyes = data.face.eyes;
      this.mouth = data.face.mouth;
      this.nose = data.face.nose;
    });
  } 


}