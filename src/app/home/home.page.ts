import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WordsComponent } from '../components/words/words.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) { }

  async open() {
    const modal = await this.modalController.create({
      component: WordsComponent
    });
    modal.present();
  }

}
