import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import {RestapiService} from '../restapi.service'
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   
  name:string = "jey";
  department:string = "ECE";
  college:string = "National Engg College";
  private students;

  private countries;
  private forcast ;
  private forcastlsit;
  loading: any;
  dataloading: boolean;
 

  constructor(public route:Router,  public restapi: RestapiService , public loadingController: LoadingController) {
    this.loading = false;
   /* this.restapi.getStudents().subscribe((response) => {
      console.log(response);
      this.students = response;
  });

    this.restapi.getcountries().subscribe((response) => {
    console.log(response);
    this.countries = response;
  });*/

   /* this.restapi.getforcast().subscribe((response) => {
      console.log('forcst', response);
      //this.forcast = response;
      const data = JSON.stringify(response);
      const jsdt  = JSON.parse(data);
      const jsdt1 = jsdt['properties'];
      this.forcast = jsdt1['periods'];
     // const properties  = data.properties;
      console.log(this.forcast);
    });*/
    this.getForcastData();

  }

  getForcastData(){ 
    this.dataloading = true;
    this.restapi.getforcastData().then(response => {
      console.log('forcst', response);
      //this.forcast = response;
      const data = JSON.stringify(response);
      const jsdt  = JSON.parse(data);
      const jsdt1 = jsdt['properties'];
      this.forcast = jsdt1['periods'];
     // const properties  = data.properties;
     this.dataloading = false;
       console.log('forcae data retrved ',this.forcast);
       console.log(' forcae',this.dataloading);
    });

  }
  navigatetoDep(){
    this.route.navigate(['department',{}]);

  }
  navigatetoChane(id){
    console.log('id is ' + id);
    this.route.navigate(['department'], id);
  }

  /*async ionViewWillEnter(){
    console.log('ionic view');
    await this.presentLoading();
    this.restapi.getforcast().subscribe((response) => {
      console.log('forcst', response);
      const data = JSON.stringify(response);
      const jsdt  = JSON.parse(data);
      const jsdt1 = jsdt['properties'];
      this.forcast = jsdt1['periods'];
     // const properties  = data.properties;
      console.log(this.forcast);
      //this.forcast = data;
    });
  }*/

  /*async ngOnInit() {
    console.log('oninit');
    await this.presentLoading();
    this.restapi.getforcast().pipe(
      finalize(async () => {
          // Hide the loading spinner on success or error
          await this.loading.dismiss();
      })
     ).subscribe((response) => {
      //console.log('forcst', response);
      //this.forcast = response;
      const data = JSON.stringify(response);
      const jsdt  = JSON.parse(data);
      const jsdt1 = jsdt['properties'];
      this.forcast = jsdt1['periods'];
     // const properties  = data.properties;
      console.log(this.forcast);

    });
  }*/
  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
        message: 'Loading...'
    });
    // Present the loading controller
    await this.loading.present();
}

}
