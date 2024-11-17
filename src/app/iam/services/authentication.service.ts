import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SignUpRequest } from '../model/sign-up.request';
import { SignUpResponse } from '../model/sign-up.response';
import { SignInRequest } from '../model/sign-in.request';
import { SignInResponse } from '../model/sign-in.response';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  basePath: string = `${environment.serverBasePath}`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    !!localStorage.getItem('token')
  );
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  private signedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );

  constructor(private router: Router, private http: HttpClient) {}

  get isSignedIn() {
    return this.signedIn.asObservable();
  }

  get currentUserId() {
    return this.signedInUserId.asObservable();
  }

  get currentUsername() {
    return this.signedInUsername.asObservable();
  }

  signUp(signUpRequest: SignUpRequest) {
    this.http
      .post<SignUpResponse>(
        `${this.basePath}/authentication/sign-up`,
        signUpRequest,
        this.httpOptions
      )
      .subscribe({
        next: (response) => {
          console.log(
            `Signed up as ${response.username} with id ${response.id}`
          );
          this.router.navigate(['/sign-in']);
        },
        error: (error) => {
          console.error(`Error while signing up: ${error}`);
          this.router.navigate(['/sign-up']);
        },
      });
  }

  signIn(signInRequest: SignInRequest) {
    this.http
      .post<SignInResponse>(
        `${this.basePath}/authentication/sign-in`,
        signInRequest,
        this.httpOptions
      )
      .subscribe({
        next: (response) => {
          if (response.token) {
            this.signedIn.next(true);
            this.signedInUserId.next(response.id);
            this.signedInUsername.next(response.username);
            localStorage.setItem('token', response.token);
            console.log(`Signed in successfully. Token: ${response.token}`);
            this.router.navigate(['/']);
          } else {
            console.error('Sign-in response does not contain a token');
          }
        },
        error: (error) => {
          console.error('Sign-in error:', error);
          this.router.navigate(['/sign-in']);
        },
      });
  }

  signOut() {
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedInUsername.next('');
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']);
  }
}
