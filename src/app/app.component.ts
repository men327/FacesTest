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

  private Eyes: any =[];
  private Mouths: any =[];
  private Noses: any =[];
  private Colors: any =['ff5733', '44ec1a', '1abfec', '8e8895', 'ee7d7d', 'a14df0', '4d52f0', 'f0eb4d'];

  constructor(private FaceService: FaceService){
    FaceService.getListFaces().subscribe(data => {
      this.Eyes = data.face.eyes;
      this.Mouths = data.face.mouth;
      this.Noses = data.face.nose;
    });    

    FaceService.getColors().subscribe(data => {
      this.Colors = data.Colors;
      console.log(this.Colors);
    });

    Observable.interval(2000).subscribe(x => {        
      var indexEye = Math.round(this.Eyes.length*Math.random());
      var indexMouth = Math.round(this.Mouths.length*Math.random());
      var indexNose = Math.round(this.Noses.length*Math.random());
      var indexColor = Math.round(this.Colors.length*Math.random());

      this.face = 'https://api.adorable.io/avatars/face/'+this.Eyes[indexEye]+'/'+this.Noses[indexNose]+'/'+this.Mouths[indexMouth]+'/'+this.Colors[indexColor];
      FaceService.getFace(this.Eyes[indexEye], this.Noses[indexNose], this.Mouths[indexMouth], this.Colors[indexColor])
        .subscribe(data => {
        console.log(data.text());
        });
    });
  }
}