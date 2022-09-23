import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare var $;

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getNoticias() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });
    const href =
      'https://www.gob.pe/busquedas.json?contenido%5B%5D=noticias&institucion%5B%5D=ingemmet&sort_by=recent';

    return this.http.get(href, { headers: headers });
  }
}
