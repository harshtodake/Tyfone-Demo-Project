import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  openDemat(){
    console.log('clicked demat');
    this.router.navigateByUrl('/tabs/accounts/demat-acc')
  }

  openRD(){
    console.log('clicked RD');
    this.router.navigateByUrl('/tabs/accounts/rd-acc')
  }

  openFD(){
    console.log('clicked FD');
    this.router.navigateByUrl('/tabs/accounts/fd-acc')
  }

}
