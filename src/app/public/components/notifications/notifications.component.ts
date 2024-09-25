import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NgFor, NgIf, MatButtonModule, MatIconModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  user = {
    name: 'John Doe',
    description: 'Abogado especializado en derecho corporativo y comercial.',
    avatarUrl: 'https://via.placeholder.com/150'
  };

  notifications = [
    { type: 'Todo', message: 'Nuevo cliente ha solicitado una reunión.' },
    { type: 'Todo', message: 'Actualización en el caso de Comercial S.A.' },
    { type: 'Mis Casos', message: 'Se ha enviado un recordatorio de vencimiento de contrato.' },
    { type: 'Mis Casos', message: 'El cliente ha solicitado una extensión del plazo.' },
    { type: 'Todo', message: 'Nuevo mensaje de un cliente.' },
  ];

  filter: string = 'Todo';

  setFilter(filter: string) {
    this.filter = filter;
  }

  getFilteredNotifications() {
    return this.notifications.filter(notification => notification.type === this.filter || this.filter === 'Todo');
  }
}
