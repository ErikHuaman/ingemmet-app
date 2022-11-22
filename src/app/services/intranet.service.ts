import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { JwtHelperService } from '@auth0/angular-jwt';
import { C } from '../constante/constants';

@Injectable({
  providedIn: 'root'
})
export class IntranetService {
  token:any;
  constructor(private http:HttpClient) { 
    this.token = this.getToken();
  }

  public get(endpoint:string): Observable<any> {
    let headers = new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization' : `Bearer ${this.token}`,
    });
    return this.http.get(`${environment.urlApi}/${endpoint}`,{headers:headers} );
  }

  public getFile(endpoint:string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${this.token}`,
   });

    return this.http.get(`${environment.urlApi}/${endpoint}` , {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob',
      headers:headers
    }); 
  }

  private convertToFormData(item: any){
    var formData = new FormData();
    for ( var key in item ) {
      console.log(key, item[key])
      formData.append(key, item[key]);
    }

    return formData;
  }

  login_cliente(data):Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.post(`${environment.urlApi}/Auth`,data,{headers:headers});
  }
  

  public getAll(controller:string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization' : this.token
    });
    return this.http.get(`${environment.urlApi}/${controller}`,{headers:headers});
  }

  public post(controller:string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization' : this.token
    });
    return this.http.post(`${environment.urlApi}/${controller}`,{headers:headers});
  }

  public getNoticias(): Observable<any> {
    const headers = new HttpHeaders();
    const utcOffset = -(new Date().getTimezoneOffset());
    headers.append('Content-Type', 'application/json');
    headers.append('utc-offset', utcOffset.toString());
    headers.append('accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '**');
    headers.append('Access-Control-Allow-Headers' , 'Origin, Content-Type, X-Auth-Token, content-type');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    return this.http.get("https://www.gob.pe/institucion/ingemmet/noticias/659147-concurso-a-la-mejor-tesis-del-2022-lo-gana-investigadora-del-ingemmet",{headers: headers} );
  
  }

  public secondWay():void{
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Authorization':'authkey',
        'userid':'1'
      })
    };
    this.http.get("https://www.gob.pe/busquedas.json",httpOptions).subscribe(data =>{
      console.log(data);      
    })
  }

  public isAuthenticated ():boolean{
    const token = sessionStorage.getItem(C.STORAGE.TOKEN_KEY);

    if(!token){ return false;}

    try{
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(token);

      if(helper.isTokenExpired(token)){
        sessionStorage.clear();
        return false;
      }

      if(!decodedToken){
        sessionStorage.clear();
        return false;
      }
      
    } catch (error) {
        sessionStorage.clear();
        return false;
    }
    
    return true;
  }
  getToken(){
    return sessionStorage.getItem(C.STORAGE.TOKEN_KEY);
  }
}
