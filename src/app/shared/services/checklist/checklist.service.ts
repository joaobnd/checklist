import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  url: string = '/api'

  constructor(private http: HttpClient) { }

  createChecklist(driverEmail: string, checklistData: any, description: string): Observable<any> {
    return this.http.post(this.url + '/checklists', { driverEmail, checklistData, description });
  }

  getChecklists(email: string): Observable<any> {
    return this.http.get(this.url + '/checklists/' + email);
  }
}
