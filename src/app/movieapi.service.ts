import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {

  constructor(private http: HttpClient) {

   }
   getMovie(){
     return this.http.get('http://localhost:3000/Movies');
   }
}
