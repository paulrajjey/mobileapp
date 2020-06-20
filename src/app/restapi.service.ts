import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class RestapiService {

  baseUrl:string = "http://localhost:8081/students";
  baseUrlc:string = "https://api.covid19api.com/countries";
  baseUrlc1:string = "https://api.weather.gov/gridpoints/LWX/96,70/forecast";
  

  constructor(private  httpClient : HttpClient) {
    
    this.getStudents();
   }
   public  getStudents() {

    return this.httpClient.get(this.baseUrl);

    }
    public  getcountries() {

      return this.httpClient.get(this.baseUrlc);

      }
      public  getforcast() {

        return this.httpClient.get(this.baseUrlc1);
  
        }
        public  getforcastData() {
          let result ;
          let promise = new Promise( resolve => {
          // return  new Promise( resolve => {
            this.httpClient.get(this.baseUrlc1).subscribe(data => {
              result = data;
              console.log('key data ' , result);
              resolve(result);
            });
          });
          return promise;
         // return this.httpClient.get(this.baseUrlc1);

          }

}
