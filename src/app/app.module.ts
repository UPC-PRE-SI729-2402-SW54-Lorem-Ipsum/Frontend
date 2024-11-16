import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./client/pages/home/home.component";
import {LawyerService} from "./lawyer/services/lawyer.service";
import { LawyerReComponent } from './client/components/lawyer-re/lawyer-re.component';
import { CurrentUserComponent } from './client/components/current-user/current-user.component';
import {FooterComponent} from "./public/components/footer/footer.component";
import {ToolbarComponent} from "./public/components/toolbar/toolbar.component";
import { CasesComponent } from './lawyer/component/cases/cases.component';
import {NotificationsComponent} from "./lawyer/component/notifications/notifications.component";
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './iam/pages/forgot-password/forgot-password.component';
import { SignUpLawyerComponent } from './iam/pages/sign-up-lawyer/sign-up-lawyer.component';
import { SignUpClientComponent } from './iam/pages/sign-up-client/sign-up-client.component';
import { AddSpecializationAndPriceComponent } from './iam/pages/add-specialization-and-price/add-specialization-and-price.component';
import { ForLawyersComponent } from './iam/pages/for-lawyers/for-lawyers.component';
import { ChooseRoleComponent } from './iam/pages/choose-role/choose-role.component';
import { SuccessfulSignUpComponent } from './iam/pages/successful-sign-up/successful-sign-up.component';
import {NgOptimizedImage} from "@angular/common";
import { ConsultationsComponent } from './lawyer/component/consultations/consultations.component';

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
    ConsultationsComponent
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
    NgOptimizedImage
  ],
  providers: [
    provideAnimationsAsync(),
    LawyerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
