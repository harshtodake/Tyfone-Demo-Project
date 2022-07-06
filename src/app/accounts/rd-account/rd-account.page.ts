import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rd-account',
  templateUrl: './rd-account.page.html',
  styleUrls: ['./rd-account.page.css'],
})
export class RdAccountPage implements OnInit {
  constructor(public alrtCtrl: AlertController) {}

  ngOnInit() {}

  onSubmit() {
    this.alrtCtrl
      .create({
        header: 'Confirm',
        subHeader: '',
        message: '',
        buttons: ['ok','cancel'],
      })
      .then((res) => {
        res.present();
      });
  }
}
