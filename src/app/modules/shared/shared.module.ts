import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundPipe } from 'src/app/pipes/round.pipe';
import { WordsComponent } from 'src/app/components/words/words.component';

@NgModule({
  declarations: [
    RoundPipe,
    WordsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoundPipe,
    WordsComponent
  ]
})
export class SharedModule { }
