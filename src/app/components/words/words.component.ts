import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Words2Component } from '../words2/words2.component';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss'],
})
export class WordsComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async open() {
    const modal = await this.modalController.create({
      component: Words2Component
    });
    modal.present();
  }

}
