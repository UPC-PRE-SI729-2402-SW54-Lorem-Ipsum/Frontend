import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NotificationsService } from '../../services/notifications.service';

describe('NotificationsService', () => {
  let service: NotificationsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NotificationsService]
    });

    service = TestBed.inject(NotificationsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch notifications by lawyer ID', () => {
    const dummyNotifications = [
      { id: 1, message: 'Test Notification 1' },
      { id: 2, message: 'Test Notification 2' }
    ];

    service.getNotificationsByLawyerId(1).subscribe(notifications => {
      expect(notifications.length).toBe(2);
      expect(notifications).toEqual(dummyNotifications);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/v1/notification/client/1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyNotifications);
  });
});
