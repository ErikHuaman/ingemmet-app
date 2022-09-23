import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IntranetService {
  
  constructor(private http:HttpClient) { }

  public get(endpoint:string): Observable<any> {
    return this.http.get(`${environment.urlApi}/${endpoint}` );
  }

  private convertToFormData(item: any){
    var formData = new FormData();
    for ( var key in item ) {
      console.log(key, item[key])
      formData.append(key, item[key]);
    }

    return formData;
  }
}
