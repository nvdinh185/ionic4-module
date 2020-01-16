import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WordsComponent } from 'src/app/components/words/words.component';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.page.html',
  styleUrls: ['./numbers.page.scss'],
})
export class NumbersPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async open() {
    const modal = await this.modalController.create({
      component: WordsComponent
    });
    modal.present();
  }

}
