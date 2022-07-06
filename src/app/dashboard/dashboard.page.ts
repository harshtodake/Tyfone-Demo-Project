import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  username = 'Harshraj';

  constructor( private router: Router ) { }

  ngOnInit() {
  }


  toPay(){
    console.log('clicked');
    this.router.navigateByUrl('/tabs/dashboard/send-money');
  }

  exitPage(){
    console.log('clicked');
    this.router.navigateByUrl('/tabs/home')
  }

}
