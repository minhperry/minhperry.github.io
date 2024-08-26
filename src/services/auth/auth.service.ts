import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { catchError, map, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = environment.apiUrl + 'auth/login';
  private readonly TOKEN_NAME = 'authJWT'
  private readonly ROLE = 'userRole'

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) { }

  login(password: string) {
    return this.http.post<{token: string, role: string}>(this.API, { password })
      .pipe(
        tap(resp => {
          if (resp.token) {
            this.cookie.set(this.TOKEN_NAME, resp.token);
            this.cookie.set(this.ROLE, resp.role);
          }
        }),
        map(response => !!response.token),
        catchError(() => of(false))
      )
  }

  logout() {
    this.cookie.delete(this.TOKEN_NAME);
    this.cookie.delete(this.ROLE);
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
    return this.cookie.get(this.ROLE) || undefined;
  }
}
