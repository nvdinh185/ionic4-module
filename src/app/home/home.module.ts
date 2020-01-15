import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { WordsComponent } from '../components/words/words.component';
import { Words2Component } from '../components/words2/words2.component';

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  entryComponents: [WordsComponent],
  declarations: [HomePage, WordsComponent, Words2Component]
})
export class HomePageModule {}
