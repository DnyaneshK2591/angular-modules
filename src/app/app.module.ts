import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [AppComponent, LandingpageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /**
     * Eager loading : By default all modules will be loaded
     */
    //LoginModule,
    //RegisterModule,
    //ContactModule
    /**
     * End
     */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('#AppModule Loaded...');
  }
}
