import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    /**
     * required for lazy loading
     */
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent,
      },
    ]),
    /**
     * End
     */
  ],
  /**
   * requird for lazy loading
   */
  exports: [RouterModule],
  /**
   * End
   */
})
export class ContactModule {
  constructor() {
    console.log('#ContactModule Loaded...');
  }
}
