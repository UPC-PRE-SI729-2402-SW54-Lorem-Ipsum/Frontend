import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
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
import { ProfileComponent } from './lawyer/component/profile/profile.component';
import { ModelComponent } from './app/profiles/lawyers/model/model.component';
import { ServicesComponent } from './profiles/lawyers/services/services.component';
import { ProfileLawyerComponent } from './profiles/lawyers/pages/profile-lawyer/profile-lawyer.component';
import { CaseInformationComponent } from './profiles/lawyers/pages/case-information/case-information.component';
import { ChooseQueryComponent } from './profiles/lawyers/pages/choose-query/choose-query.component';
import { ChatroomComponent } from './profiles/lawyers/pages/chatroom/chatroom.component';
import { VideoCallComponent } from './profiles/lawyers/pages/video-call/video-call.component';
import { FaceToFaceAppointmentCalendarComponent } from './profiles/lawyers/pages/face-to-face-appointment-calendar/face-to-face-appointment-calendar.component';

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
    ProfileComponent,
    ModelComponent,
    ServicesComponent,
    ProfileLawyerComponent,
    CaseInformationComponent,
    ChooseQueryComponent,
    ChatroomComponent,
    VideoCallComponent,
    FaceToFaceAppointmentCalendarComponent
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
    MatGridListModule
  ],
  providers: [
    provideAnimationsAsync(),
    LawyerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
