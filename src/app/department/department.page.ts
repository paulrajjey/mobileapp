import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.page.html',
  styleUrls: ['./department.page.scss'],
})
export class DepartmentPage implements OnInit {

  channels : any;
  id ; 
  constructor(public route: Router , actrout: ActivatedRoute) {
    console.log('im in constructor ');
    this.id = actrout.queryParamMap['id'];
  }

  ngOnInit() {

    console.log('im in ngOnInit ');
    this.channels = [{"name":"group1","section":"A"},{"name":"grouop2","section":"A"},{"name":"group3","section":"C"}]

  }
  gotnextpage(id){
    console.log(id);
    this.route.navigate(['about'], id);
  }
}
