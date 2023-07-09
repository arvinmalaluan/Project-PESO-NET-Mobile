import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { EmailverifComponent } from './components/emailverif/emailverif.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    SignupComponent,
    SigninComponent,
    ForgotpassComponent,
    EmailverifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
