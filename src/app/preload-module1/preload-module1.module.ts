import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadModule1Component } from './preload-module1.component';

@NgModule({
  declarations: [PreloadModule1Component],
  imports: [CommonModule],
})
export class PreloadModule1Module {
  constructor() {
    console.log('#PreloadModule1Module Loaded...');
  }
}
