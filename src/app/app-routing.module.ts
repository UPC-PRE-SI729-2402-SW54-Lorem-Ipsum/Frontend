import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./client/pages/home/home.component";
import {NotificationsComponent} from "./lawyer/component/notifications/notifications.component";
import {CasesComponent} from "./lawyer/component/cases/cases.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: 'notifications', component: NotificationsComponent},
  { path:'cases', component: CasesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
