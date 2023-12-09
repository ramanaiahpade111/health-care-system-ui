import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnosticCenter } from '../models/diagnostic-center';

@Injectable({
  providedIn: 'root'
})
export class LabsService {

  private baseUrl = "http://localhost:8090/health-care-system/api/admin"

  constructor(private http: HttpClient) { }

  getDiagnosticCenters(): Observable<DiagnosticCenter[]>{
    return this.http.get<DiagnosticCenter[]>(this.baseUrl + "/allCenters");
  }
}
