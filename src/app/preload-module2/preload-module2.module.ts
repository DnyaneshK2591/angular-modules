import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadModule2Component } from './preload-module2.component';

@NgModule({
  declarations: [PreloadModule2Component],
  imports: [CommonModule],
})
export class PreloadModule2Module {
  constructor() {
    console.log('#PreloadModule2Module Loaded...');
  }
}
