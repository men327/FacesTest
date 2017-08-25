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

  public getFace() {
    let headers = new Headers({ 'Access-Control-Allow-Headers': 'Content-Type'});
    let options = new RequestOptions({ headers: headers });
    return this._http.get('https://api.adorable.io/avatars/face/eyes2/nose5/mouth2/8e8895')
    .map((res: Response) => res);
  }

}
