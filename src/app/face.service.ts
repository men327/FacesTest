import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FaceService {
  
  constructor (private _http: Http) {}

  public getListFaces() {
    let headers = new Headers({ 'Access-Control-Allow-Headers': 'Content-Type'});
    let options = new RequestOptions({ headers: headers });
    return this._http.get('https://api.adorable.io/avatars/list', options)
    .map((res: Response) => res.json());
  }

  public getFace(eye, nose, mouth, color) {
    let headers = new Headers({ 'Access-Control-Allow-Headers': 'Content-Type'});
    let options = new RequestOptions({ headers: headers });
    return this._http.get('https://api.adorable.io/avatars/face/'+eye+'/'+nose+'/'+mouth+'/'+color, options)
    .map((res: Response) => res);
  }

}
