import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundPipe } from 'src/app/pipes/round.pipe';

@NgModule({
  declarations: [
    RoundPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoundPipe
  ]
})
export class SharedModule { }
