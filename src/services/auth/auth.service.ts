import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = environment.apiUrl + '/validate/';
  private cookieName = 'authMd5'

  constructor(private http: HttpClient, private cookieServ: CookieService) { }

  login(password: string) {
    const md5 = this.md5(password);
    return this.http.get<{valid: boolean}>(this.api + md5);
  }

  logout() {
    this.cookieServ.delete(this.cookieName);
  }

  isLoggedIn(): boolean {
    return this.cookieServ.check(this.cookieName);
  }

  getCookieName(): string {
    return this.cookieName;
  }

  private md5(str: string): string {
    return Md5.hashStr(str);
  }
}
