import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { catchError, map, tap, of } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
  role: string,
  iat: number,
  iss: string
  aud: string,
  exp: number
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = environment.apiUrl + 'auth/login';
  readonly TOKEN_NAME = 'authJWT'

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) { }

  login(password: string) {
    return this.http.post<{token: string, role: string}>(this.API, { password })
      .pipe(
        tap(resp => {
          if (resp.token) {
            this.cookie.set(this.TOKEN_NAME, resp.token);
          }
        }),
        map(response => !!response.token),
        catchError(() => of(false))
      )
  }

  logout() {
    this.cookie.delete(this.TOKEN_NAME);
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return !!this.cookie.get(this.TOKEN_NAME);
  }

  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }

  isRecruiter(): boolean {
    return this.getRole() === 'recruiter';
  }

  hasRights(): boolean {
    return this.isAdmin() || this.isRecruiter();
  }

  private getRole(): string | undefined {
    let token = this.cookie.get(this.TOKEN_NAME);
    return jwtDecode<TokenPayload>(token).role
  }
}
