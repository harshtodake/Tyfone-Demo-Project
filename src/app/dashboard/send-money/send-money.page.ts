import { Component, Input, OnInit } from '@angular/core';
import { AlertController,ModalController } from '@ionic/angular';
import { UserdataService } from 'src/app/userdata.service';


@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.page.html',
  styleUrls: ['./send-money.page.scss'],
})
export class SendMoneyPage implements OnInit {

  @Input() payees: string[];

  constructor(private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private userData: UserdataService) { }

  ngOnInit() {
  }

}
