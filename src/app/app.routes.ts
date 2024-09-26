import { Routes } from '@angular/router';
import { NotificationsComponent } from './public/components/notifications/notifications.component';
import { CasosComponent } from './public/components/casos/casos.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'casos', component: CasosComponent  },
];
