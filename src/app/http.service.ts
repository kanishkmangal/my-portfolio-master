import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  http = inject(HttpClient);
  constructor() { }

  getAboutInfo(){
    return this.http.get("http://localhost:3000/about");
  }
  getSkills(){
    return this.http.get<any[]>("http://localhost:3000/skills");
  }
  getProjects(){
    return this.http.get<Product[]>("http://localhost:3000/projects");
  }
  addContactMe(data:any){
    return this.http.post("http://localhost:3000/contactme",data)
  }
}
