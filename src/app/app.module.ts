import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './client/pages/home/home.component';
import { LawyerService } from './lawyer/services/lawyer.service';
import { LawyerReComponent } from './client/components/lawyer-re/lawyer-re.component';
import { CurrentUserComponent } from './client/components/current-user/current-user.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { ToolbarComponent } from './public/components/toolbar/toolbar.component';
import { CasesComponent } from './lawyer/component/cases/cases.component';
import { NotificationsComponent } from './lawyer/component/notifications/notifications.component';
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './iam/pages/forgot-password/forgot-password.component';
import { SignUpLawyerComponent } from './iam/pages/sign-up-lawyer/sign-up-lawyer.component';
import { SignUpClientComponent } from './iam/pages/sign-up-client/sign-up-client.component';
import { AddSpecializationAndPriceComponent } from './iam/pages/add-specialization-and-price/add-specialization-and-price.component';
import { ForLawyersComponent } from './iam/pages/for-lawyers/for-lawyers.component';
import { ChooseRoleComponent } from './iam/pages/choose-role/choose-role.component';
import { SuccessfulSignUpComponent } from './iam/pages/successful-sign-up/successful-sign-up.component';
import {NgOptimizedImage} from "@angular/common";
import {provideNativeDateAdapter} from "@angular/material/core";
import { AuthenticationSectionComponent } from './iam/component/authentication-section/authentication-section.component';
import {AuthenticationInterceptor} from "./iam/services/authentication.interceptor";
import {AuthenticationService} from "./iam/services/authentication.service";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import { LawyersProfileComponent } from './profile/lawyers-profiles/component/lawyers-profile/lawyers-profile.component';
import {ReviewLegalCaseComponent} from "./legalcase/pages/review-legal-case/review-legal-case.component";
import {ViewLegalCaseComponent} from "./legalcase/pages/view-legal-case/view-legal-case.component";
import {DocumentManagementComponent} from "./legalcase/pages/document-management/document-management.component";
import {ConfirmRejectionComponent} from "./legalcase/component/confirm-rejection/confirm-rejection.component";
import {AddAndEditDocumentComponent} from "./legalcase/component/add-and-edit-document/add-and-edit-document.component";
import {DocumentTableComponent} from "./legalcase/component/document-table/document-table.component";
import {MatDialogActions, MatDialogContent} from "@angular/material/dialog";
import { ConfirmCloseCaseComponent } from './legalcase/component/confirm-close-case/confirm-close-case.component';
import { AddPaymentComponent } from './legalcase/component/add-payment/add-payment.component';
import { PaymentTableComponent } from './legalcase/component/payment-table/payment-table.component';
import { PaymentManagementComponent } from './legalcase/pages/payment-management/payment-management.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    LawyerReComponent,
    CurrentUserComponent,
    FooterComponent,
    ToolbarComponent,
    NotificationsComponent,
    CasesComponent,
    SignInComponent,
    ForgotPasswordComponent,
    SignUpLawyerComponent,
    SignUpClientComponent,
    AddSpecializationAndPriceComponent,
    ForLawyersComponent,
    ChooseRoleComponent,
    SuccessfulSignUpComponent,
    AuthenticationSectionComponent,
    LawyersProfileComponent,
    ReviewLegalCaseComponent,
    ViewLegalCaseComponent,
    DocumentManagementComponent,
    ConfirmRejectionComponent,
    AddAndEditDocumentComponent,
    DocumentTableComponent,
    ConfirmCloseCaseComponent,
    AddPaymentComponent,
    PaymentTableComponent,
    PaymentManagementComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    NgOptimizedImage,
    MatDialogContent,
    MatDialogActions,
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    LawyerService,
    AuthenticationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
