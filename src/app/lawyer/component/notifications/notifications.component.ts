import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  user = {
    name: 'John Doe',
    description: 'Abogado especializado en derecho corporativo y comercial.',
    avatarUrl: 'https://via.placeholder.com/150',
  };

  notifications: any[] = [];
  filteredNotifications: any[] = [];
  filter: string = 'Todo';

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit() {
    const clientId = 1;
    const consultationId = 1;
    this.loadNotifications(clientId, consultationId);
  }

  loadNotifications(clientId: number, consultationId: number) {
    this.notificationsService.getNotificationsByClientId(clientId).subscribe({
      next: (data: any[]) => {
        this.notifications = data;
        this.applyFilter();
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error loading client notifications:', err);
      },
    });

    this.notificationsService.getNotificationsByConsultationId(consultationId).subscribe({
      next: (data: any[]) => {
        this.notifications = [...this.notifications, ...data];
        this.applyFilter();
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error loading case notifications:', err);
      },
    });
  }

  setFilter(filter: string) {
    this.filter = filter;
    this.applyFilter();
  }

  applyFilter() {
    if (this.filter === 'Todo') {
      this.filteredNotifications = this.notifications;
    } else if (this.filter === 'Mis Casos') {
      this.filteredNotifications = this.notifications.filter((notification) =>
        notification.consultationId
      );
    }
  }
}
