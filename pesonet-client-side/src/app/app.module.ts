import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ManagePostComponent } from './components/manage-post/manage-post.component';
import { ManageInfoComponent } from './components/manage-info/manage-info.component';
import { ManageResumeComponent } from './components/manage-resume/manage-resume.component';
import { ResultsComponent } from './components/results/results.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgToastModule } from 'ng-angular-popup';

import {
  NgxUiLoaderConfig,
  NgxUiLoaderModule,
  SPINNER,
  PB_DIRECTION,
} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: 'Please wait ...',
  textColor: '#1D5D9B',
  textPosition: 'center-center',
  pbColor: '#1D5D9B',
  bgsColor: '#1D5D9B',
  fgsColor: '#1D5D9B',
  fgsType: 'ball-spin-clockwise-fade-rotating',
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
};

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    HomeComponent,
    JobsComponent,
    MessagesComponent,
    NotificationsComponent,
    ManagePostComponent,
    ManageInfoComponent,
    ManageResumeComponent,
    ResultsComponent,
    ProfileHeaderComponent,
    ProfileComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({}),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
