import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NumbersPage } from './numbers.page';
import { WordsComponent } from 'src/app/components/words/words.component';

const routes: Routes = [
  {
    path: '',
    component: NumbersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NumbersPage, WordsComponent]
})
export class NumbersPageModule {}
