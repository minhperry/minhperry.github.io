import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicModeHandlerService {
  private api = environment.apiUrl + 'public'
  
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<boolean>(this.api);
  }
}
