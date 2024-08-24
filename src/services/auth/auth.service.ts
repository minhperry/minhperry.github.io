import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Md5 } from 'ts-md5';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = environment.apiUrl + 'validate/';
  private key = environment.adminPwd
  private cookieName = 'authMd5'

  constructor(private http: HttpClient, private cookieServ: CookieService, private router: Router) { }

  login(password: string) {
    const md5 = this.md5(password);
    return this.http.get<{is: string}>(this.api + md5);
  }

  logout() {
    this.cookieServ.delete(this.cookieName);
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return this.cookieServ.check(this.cookieName);
  }

  get cookieService(): CookieService {
    return this.cookieServ;
  }

  isAdmin(): boolean {
    console.log('cookie: ', this.cookieServ.get(this.cookieName))
    console.log('key: ', this.key, ', md5: ', this.md5(this.key))
    return this.cookieServ.get(this.cookieName) === 'admin_' + this.md5(this.key);
  }

  md5(str: string): string {
    return Md5.hashStr(str);
  }
}
