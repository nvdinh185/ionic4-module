import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Numbers2Page } from './numbers2.page';
import { WordsComponent } from 'src/app/components/words/words.component';

const routes: Routes = [
  {
    path: '',
    component: Numbers2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Numbers2Page, WordsComponent]
})
export class Numbers2PageModule {}
