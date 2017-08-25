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
  face: any;

  private eyes: any =[];
  private mouth: any =[];
  private nose: any =[];

  constructor(private faces: FaceService){
    faces.getListFaces().subscribe(data => {
      this.eyes = data.face.eyes;
      this.mouth = data.face.mouth;
      this.nose = data.face.nose;
    });    

    Observable.interval(2000).subscribe(x => {
        
      var indexEye = Math.round(this.eyes.length*Math.random());
      var indexMouth = Math.round(this.eyes.length*Math.random());
      var indexNose = Math.round(this.eyes.length*Math.random());

      this.face = 'https://api.adorable.io/avatars/face/'+this.eyes[indexEye]+'/'+this.nose[indexNose]+'/'+this.mouth[indexMouth]+'/8e8895';          
    });
  } 


}