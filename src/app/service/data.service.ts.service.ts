import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  getCountry(){
    return this.http.get('http://restcountries.eu/rest/v2/lang/es');
  }

}
