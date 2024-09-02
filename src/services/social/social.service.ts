import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groups } from '../../interfaces/links';
import {AuthService} from "../auth/auth.service";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  private api = environment.apiUrl + 'socials/v2'

  constructor(private http: HttpClient, private auth: AuthService, private cookie: CookieService) { }

  get(): Observable<Groups> {
    if (this.auth.isLoggedIn()) {
      return this.http.get<Groups>(this.api, { headers: {
          'Authorization': 'Bearer ' + this.cookie.get(this.auth.TOKEN_NAME)
        }
      })
    }
    return this.http.get<Groups>(this.api);
  }
}
