import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { authenticationGuard } from './iam/services/authentication.guard';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './client/pages/home/home.component';
import { NotificationsComponent } from './lawyer/component/notifications/notifications.component';
import { CasesComponent } from './lawyer/component/cases/cases.component';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './iam/pages/forgot-password/forgot-password.component';
import { SignUpLawyerComponent } from './iam/pages/sign-up-lawyer/sign-up-lawyer.component';
import { SignUpClientComponent } from './iam/pages/sign-up-client/sign-up-client.component';
import { ForLawyersComponent } from './iam/pages/for-lawyers/for-lawyers.component';
import { ChooseRoleComponent } from './iam/pages/choose-role/choose-role.component';
import { AddSpecializationAndPriceComponent } from './iam/pages/add-specialization-and-price/add-specialization-and-price.component';
import { SuccessfulSignUpComponent } from './iam/pages/successful-sign-up/successful-sign-up.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'cases',
    component: CasesComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'choose-role',
    component: ChooseRoleComponent,
  },
  {
    path: 'for-lawyers',
    component: ForLawyersComponent,
  },
  {
    path: 'add-specialization-and-price',
    component: AddSpecializationAndPriceComponent,
  },
  {
    path: 'successful',
    component: SuccessfulSignUpComponent,
  },
  {
    path: 'sign-up-lawyer',
    component: SignUpLawyerComponent,
  },
  {
    path: 'sign-up-client',
    component: SignUpClientComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
