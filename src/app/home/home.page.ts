import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RestapiService} from '../restapi.service'

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

  constructor(public route:Router,  public restapi: RestapiService) {

    this.restapi.getStudents().subscribe((response) => {
      console.log(response);
      this.students = response;
  });

    this.restapi.getcountries().subscribe((response) => {
    console.log(response);
    this.countries = response;
  });

  }
  navigatetoDep(){
    this.route.navigate(['department',{}]);

  }
  navigatetoChane(id){
    console.log('id is ' + id);
    this.route.navigate(['department'], id);
  }
}
