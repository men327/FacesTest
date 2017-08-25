import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FaceService {
  
  constructor (private _http: Http) {}

  //Se obtiene la lista de las caracteristicas de las caras
  public getListFaces() {
    let headers = new Headers({ 'Access-Control-Allow-Headers': 'Content-Type'});
    let options = new RequestOptions({ headers: headers });
    return this._http.get('https://api.adorable.io/avatars/list', options)
    .map((res: Response) => res.json());
  }

  //Obtiene un face, de acuerdo a los parametros que se tienen
  public getFace(eye, nose, mouth, color) {
    let headers = new Headers({ 'Access-Control-Allow-Headers': 'Content-Type'});
    let options = new RequestOptions({ headers: headers });
    return this._http.get('https://api.adorable.io/avatars/face/'+eye+'/'+nose+'/'+mouth+'/'+color, options)
    .map((res: Response) => res);
  }

  //Para obtener lista de colores que se tiene en la ApiFacesTest
  public getColors() {
    let headers = new Headers({ 'Access-Control-Allow-Headers': 'Content-Type'});
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:3000/colors')
    .map((res: Response) => res.json());
  }

  //Para obtener lista de colores que se tiene en la ApiFacesTest con un tamaño determinado
  public getColorsSize(size) {
    let headers = new Headers({ 'Access-Control-Allow-Headers': 'Content-Type'});
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://localhost:3000/colors/'+size)
    .map((res: Response) => res.json());
  }

}
