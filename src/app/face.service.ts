import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Http, Response } from '@angular/http';
/*import 'rxjs/add/operator/map';
import 'rxjs/Rx';*/

@Injectable()
export class FaceService {
  
  constructor (private _http: Http) {}

  eyes: any =[];
  mouth: any =[];
  nose: any =[];

  public getListFaces() {
    let headers = new Headers({ 'Access-Control-Allow-Headers': 'Content-Type'});
    let options = new RequestOptions({ headers: headers });
    return this._http.get('https://api.adorable.io/avatars/list', options)
    .map((res: Response) => res.json())
      .subscribe(data => {
        this.eyes = data.face.eyes;
        this.mouth = data.face.mouth;
        this.eyes = data.face.nose;
    });
  }

    

}
