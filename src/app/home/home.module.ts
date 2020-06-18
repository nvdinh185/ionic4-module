import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SharedModule } from '../modules/shared/shared.module';
import { WordsComponent } from '../components/words/words.component';

@NgModule({
  imports: [
    IonicModule,
    SharedModule,
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
  ]
})
export class HomePageModule { }
