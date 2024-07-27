import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonService<T> {

  constructor(private httpClient: HttpClient) { }

  get(url: string) {
    return this.httpClient.get<T>(url);
  }
}
