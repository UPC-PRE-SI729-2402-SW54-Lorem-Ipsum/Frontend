import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./client/pages/home/home.component";
import {NotificationsComponent} from "./lawyer/component/notifications/notifications.component";
import {CasesComponent} from "./lawyer/component/cases/cases.component";
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
import {ReviewLegalCaseComponent} from "./legalcase/pages/review-legal-case/review-legal-case.component";
import {ViewLegalCaseComponent} from "./legalcase/pages/view-legal-case/view-legal-case.component";
import {DocumentManagementComponent} from "./legalcase/pages/document-management/document-management.component";
import {PaymentManagementComponent} from "./legalcase/pages/payment-management/payment-management.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent, canActivate: [authenticationGuard]
  },
  { path: 'notifications', component: NotificationsComponent, canActivate: [authenticationGuard]},
  { path:'cases', component: CasesComponent, canActivate: [authenticationGuard]},
  { path: 'sign-in', component: SignInComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'choose-role', component: ChooseRoleComponent },
  { path: 'for-lawyers', component: ForLawyersComponent },
  { path: 'add-specialization-and-price', component: AddSpecializationAndPriceComponent },
  { path: 'successful', component: SuccessfulSignUpComponent },
  { path: 'sign-up-lawyer', component: SignUpLawyerComponent },
  { path: 'sign-up-client', component: SignUpClientComponent },
  { path: 'review-legal-case', component: ReviewLegalCaseComponent },
  { path: 'view-legal-case', component: ViewLegalCaseComponent },
  { path: 'documents', component: DocumentManagementComponent },
  { path: 'payments', component: PaymentManagementComponent },


  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
