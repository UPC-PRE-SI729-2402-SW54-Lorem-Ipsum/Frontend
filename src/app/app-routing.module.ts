import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {NotificationsComponent} from "./followup/components/notifications/notifications.component";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {ForgotPasswordComponent} from "./iam/pages/forgot-password/forgot-password.component";
import {SignUpLawyerComponent} from "./iam/pages/sign-up-lawyer/sign-up-lawyer.component";
import {SignUpClientComponent} from "./iam/pages/sign-up-client/sign-up-client.component";
import {ForLawyersComponent} from "./iam/pages/for-lawyers/for-lawyers.component";
import {ChooseRoleComponent} from "./iam/pages/choose-role/choose-role.component";
import {
  AddSpecializationAndPriceComponent
} from "./iam/pages/add-specialization-and-price/add-specialization-and-price.component";
import {SuccessfulSignUpComponent} from "./iam/pages/successful-sign-up/successful-sign-up.component";
import {authenticationGuard} from "./iam/services/authentication.guard";
import {HomeClientComponent} from "./profile/pages/home-client/home-client.component";
import {
  LawyerProfileClientviewComponent
} from "./profile/components/lawyer-profile-clientview/lawyer-profile-clientview.component";
import {LawyerListComponent} from "./profile/components/lawyer-list/lawyer-list.component";
import {MakeConsultationComponent} from "./consultation/components/make-consultation/make-consultation.component";
import {
  ViewConsultationsMadeComponent
} from "./consultation/components/view-consultations-made/view-consultations-made.component";

const routes: Routes = [
  {
    path: 'home-client',
    component: HomeClientComponent, canActivate: [authenticationGuard]
  },
  { path: 'view-consultations-made/:lawyerId', component: ViewConsultationsMadeComponent, canActivate: [authenticationGuard] },
  { path: 'make-consultation/:lawyerId', component: MakeConsultationComponent, canActivate: [authenticationGuard] },
  { path: 'lawyer-list', component: LawyerListComponent, canActivate: [authenticationGuard] },
  { path: 'lawyer-profile/:lawyerId', component: LawyerProfileClientviewComponent, canActivate: [authenticationGuard] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [authenticationGuard]},
  { path: 'sign-in', component: SignInComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'choose-role', component: ChooseRoleComponent },
  { path: 'for-lawyers', component: ForLawyersComponent },
  { path: 'add-specialization-and-price', component: AddSpecializationAndPriceComponent },
  { path: 'successful', component: SuccessfulSignUpComponent },
  { path: 'sign-up-lawyer', component: SignUpLawyerComponent },
  { path: 'sign-up-client', component: SignUpClientComponent },

  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
