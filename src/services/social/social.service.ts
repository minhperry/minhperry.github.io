import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groups } from '../../interfaces/links';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  private api = environment.apiUrl + 'socials'

  headers = {
    'Access-Control-Allow-Origin': '*',
  }

  constructor(private http: HttpClient) { }

  get(): Observable<Groups> { 
    return this.http.get<Groups>(this.api, { headers: this.headers });
  }
}
