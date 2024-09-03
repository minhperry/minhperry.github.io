import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groups } from '../../interfaces/links';
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  constructor(private auth: AuthService) { }

  get(): Observable<Groups> {
    if (this.auth.isLoggedIn()) {
      return this.auth.getWithAuth<Groups>('socials/v2');
    }
    return this.auth.get<Groups>('socials/v2');
  }
}
