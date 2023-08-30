import { Component, OnInit, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  private alertController = inject(AlertController);

  constructor() { }

  ngOnInit() {
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
        {
        text:'Ok!',
        handler:() =>{
          console.log('Click in ok!');
        }
      },
      {
        text:'Cancel',
        role:'cancel',
        cssClass:'rojo'
      }
    ],
    });

    await alert.present();
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      backdropDismiss:false,
      header: 'Alert',
      inputs: [{
        placeholder: 'Name',
      },
      {
        placeholder: 'Nickname (max 8 characters)',
        attributes: {
          maxlength: 8,
        },
      },
      {
        type: 'number',
        placeholder: 'Age',
        min: 1,
        max: 100,
      },
      {
        type: 'textarea',
        placeholder: 'A little about yourself',
      },],
      buttons:[
        {
          text:'Cancel',
          role:'cancel',
          cssClass:'rojo'
        },
        {
          text:'ok',
          handler:(data: any)=>{
            console.log(data);

          }
        }
      ]
    });

    await alert.present();
  }

}
