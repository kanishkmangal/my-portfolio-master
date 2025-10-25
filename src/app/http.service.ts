import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = 'http://localhost:3000'; // ✅ Added base URL
  http = inject(HttpClient);

  constructor() {}

  getAboutInfo() {
    return this.http.get(`${this.baseUrl}/about`);
  }

  getSkills() {
    return this.http.get<any[]>(`${this.baseUrl}/skills`);
  }

  getProjects() {
    return this.http.get<Product[]>(`${this.baseUrl}/projects`);
  }

  addContactMe(data: any) {
    return this.http.post(`${this.baseUrl}/contactme`, data);
  }
}
