import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class RestapiService {

  baseUrl:string = "http://localhost:8081/students";
  baseUrlc:string = "https://api.covid19api.com/countries";


  constructor(private  httpClient : HttpClient) {
    this.getStudents();
   }
   public  getStudents() {

    return this.httpClient.get(this.baseUrl);

    }
    public  getcountries() {

      return this.httpClient.get(this.baseUrlc);

      }

}
