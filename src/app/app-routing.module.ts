import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./client/pages/home/home.component";
import {NotificationsComponent} from "./lawyer/component/notifications/notifications.component";
import {CasesComponent} from "./lawyer/component/cases/cases.component";
import {ChatroomComponent} from "./profiles/lawyers/pages/chatroom/chatroom.component";
import {CaseInformationComponent} from "./profiles/lawyers/pages/case-information/case-information.component";
import {FaceToFaceAppointmentCalendarComponent} from "./profiles/lawyers/pages/face-to-face-appointment-calendar/face-to-face-appointment-calendar.component";
import {ProfileLawyerComponent} from "./profiles/lawyers/pages/profile-lawyer/profile-lawyer.component";
import {VideoCallComponent} from "./profiles/lawyers/pages/video-call/video-call.component";
import {ChooseQueryComponent} from "./profiles/lawyers/pages/choose-query/choose-query.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path:'notifications', component: NotificationsComponent},
  { path:'cases', component: CasesComponent},
  { path:'chatroom', component: ChatroomComponent},
  { path:'caseinformation', component: CaseInformationComponent},
  { path:'choosequery', component: ChooseQueryComponent},
  { path:'facetofaceappointment', component: FaceToFaceAppointmentCalendarComponent},
  { path:'profilelawyer', component: ProfileLawyerComponent},
  { path:'videocall', component: VideoCallComponent},










  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
