import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  user = {
    name: 'Usuario 1',
   description: '------------------------------------------',
    avatarUrl: 'assets/images/user-avatar.jpg' // Ruta local
  };

  cases = [
    { logo: 'receipt', title: 'CASO: Pensión Alimenticia', message: 'Haz recibido múltiples mensajes del abogado, haz clic para ingresar al caso.' },
    { logo: 'receipt', title: 'CASO: Divorcio y Separación', message: 'El abogado ha solicitado una actualización del caso.' },
    { logo: 'receipt', title: 'CASO: Custodia de menores', message: 'Un cliente ha enviado nueva documentación.' },
    { logo: 'receipt', title: 'CASO: Contrato Comercial', message: 'Se ha enviado un recordatorio de vencimiento del contrato.' }
  ];

  caseCount = this.cases.length;
}
