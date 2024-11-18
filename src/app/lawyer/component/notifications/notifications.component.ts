import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notifications.service';
import { AuthenticationService } from '../../../iam/services/authentication.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];
  filter: string = 'Todo';

  constructor(
    private notificationService: NotificationService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authService.currentUserId.subscribe({
      next: (userId) => {
        if (userId && userId > 0) {
          this.loadNotifications(userId);
        } else {
          console.error('Invalid user ID. Cannot load notifications.');
        }
      },
      error: (err) => {
        console.error('Error fetching user ID:', err);
      },
    });
  }

  loadNotifications(userId: number): void {
    this.notificationService.getNotificationsByClientId(userId).subscribe({
      next: (data) => {
        this.notifications = data;
        console.log('Loaded notifications:', data);
      },
      error: (err) => {
        console.error('Error loading notifications:', err);
      },
    });
  }

  setFilter(filter: string): void {
    this.filter = filter;
  }

  getFilteredNotifications(): any[] {
    return this.notifications.filter(
      (notification) =>
        notification.type === this.filter || this.filter === 'Todo'
    );
  }
}

