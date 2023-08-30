import { Component, OnInit, inject } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  private actionSheetCtrl = inject(ActionSheetController);

  constructor() { }

  ngOnInit() {
  }


  onClick(){
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      backdropDismiss:false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          handler:()=> {
            console.log('Delete');

          },
          data: {
            action: 'delete',
          },
          cssClass:'rojo'
        },
        {
          text: 'Share',
          icon:'share-outline',
          handler:()=> {
            console.log('share');

          },
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon:'close-outline',
          handler:()=> {
            console.log('Cancel');

          },
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

}
