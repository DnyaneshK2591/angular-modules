import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    /**
     * required for lazy loading
     */
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
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
export class LoginModule {
  constructor() {
    console.log('#LoginModule Loaded...');
  }
}
