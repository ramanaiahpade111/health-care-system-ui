import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseUrl = "http://localhost:8090/health-care-system/api/admin"

  constructor(private http: HttpClient) { }

  getTests(): Observable<Test[]>{
    return this.http.get<Test[]>(this.baseUrl + "/allTests");
  }
}
