import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { WordsComponent } from '../components/words/words.component';
import { RoundPipe } from '../pipes/round.pipe';

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
  declarations: [
    HomePage,
    WordsComponent,
    RoundPipe
  ]
})
export class HomePageModule { }
