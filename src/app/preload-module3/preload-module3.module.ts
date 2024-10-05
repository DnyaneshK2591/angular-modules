import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadModule3Component } from './preload-module3.component';

@NgModule({
  declarations: [PreloadModule3Component],
  imports: [CommonModule],
})
export class PreloadModule3Module {
  constructor() {
    console.log('#PreloadModule3Module Loaded...');
  }
}
