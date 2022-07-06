import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.page.html',
  styleUrls: ['./transfers.page.css'],
})
export class TransfersPage implements OnInit {

  debit = 'Dr';
  credit = 'Cr';
  constructor() { }

  ngOnInit() {
  }

}
