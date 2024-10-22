import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = '/api'

  constructor(private http: HttpClient) { }

  login(email:string, pswd: string) {
    return this.http.post(this.url + '/login', {email:email, pswd: pswd})
  }

  register(email: string, pswd: string) {
    return this.http.post(this.url + '/create', { email: email, pswd: pswd });
  }
}
