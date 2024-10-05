import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    /**
     * required for lazy loading
     */
    RouterModule.forChild([
      {
        path: '',
        component: RegisterComponent,
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
export class RegisterModule {
  constructor() {
    console.log('#RegisterModule Loaded...');
  }
}
