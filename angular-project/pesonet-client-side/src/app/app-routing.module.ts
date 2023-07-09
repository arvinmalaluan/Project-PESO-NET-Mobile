import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { EmailverifComponent } from './components/emailverif/emailverif.component';

const routes: Routes = [
  { path: '', component: OnboardingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'forgotpassword', component: ForgotpassComponent },
  { path: 'emailverification', component: EmailverifComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
