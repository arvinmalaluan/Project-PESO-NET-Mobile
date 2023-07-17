import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ManagePostComponent } from './components/manage-post/manage-post.component';
import { ManageResumeComponent } from './components/manage-resume/manage-resume.component';
import { ManageInfoComponent } from './components/manage-info/manage-info.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'manage-post' },
      {
        path: 'manage-post',
        component: ManagePostComponent,
      },
      {
        path: 'manage-info',
        component: ManageInfoComponent,
      },
      {
        path: 'manage-resu',
        component: ManageResumeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
