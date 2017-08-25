import { Component } from '@angular/core';
import { FaceService } from './face.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  face: any;
  colorName: any = 'ffffff';
  colorBack: any = 'ffffff';
  private Eyes: any =[];
  private Mouths: any =[];
  private Noses: any =[];
  private Colors: any =['ff5733', '44ec1a', '1abfec', '8e8895', 'ee7d7d', 'a14df0', '4d52f0', 'f0eb4d'];
  private ColorsBack: any =['ff1733', '44f01a', '1abfec', '8e8895', '0e1a7d', 'a14df0', '4d52f0', 'f0eb4d'];

  constructor(private FaceService: FaceService){
    //Se llama servicio para obtener las caracteristicas de las caras
    FaceService.getListFaces().subscribe(data => {
      this.Eyes = data.face.eyes;
      this.Mouths = data.face.mouth;
      this.Noses = data.face.nose;
    });    

    //Se llama servicio para obtener lista de colores
    FaceService.getColors().subscribe(data => {
      this.Colors = data.Colors;
    });

    var size = Math.round(Math.random()*500+Math.random()*100)+10;
    FaceService.getColorsSize(size).subscribe(data => {
      this.ColorsBack = data.Colors;
    });

    //Función, que se actualiza cada dos segundos para obtener cara
    Observable.interval(2000).subscribe(x => {        
      var indexEye = Math.round(this.Eyes.length*Math.random());
      var indexMouth = Math.round(this.Mouths.length*Math.random());
      var indexNose = Math.round(this.Noses.length*Math.random());
      var indexColor = Math.round(this.Colors.length*Math.random());
      var indexColorBack = Math.round(this.ColorsBack.length*Math.random());

      this.colorBack = '#'+this.ColorsBack[indexColorBack];
      this.colorName = '#'+this.Colors[indexColor];
      this.face = 'https://api.adorable.io/avatars/face/'+this.Eyes[indexEye]+'/'+this.Noses[indexNose]+'/'+this.Mouths[indexMouth]+'/'+this.Colors[indexColor];
      
      //Se llama servicio para obtener cara desde el API Adorable
      FaceService.getFace(this.Eyes[indexEye], this.Noses[indexNose], this.Mouths[indexMouth], this.Colors[indexColor])
        .subscribe(data => {
          data.text();
        });
    });
  }
}