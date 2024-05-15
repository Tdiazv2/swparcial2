import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PacienteDetail } from './pacientes-detail';
import { environment } from '../../environments/environment.development';
import { catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl: string = environment.baseUrl; 

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<PacienteDetail[]> {
    return this.http
      .get<PacienteDetail[]>(this.apiUrl)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio')))
      );
  }
  getPaciente(marca: string): Observable<PacienteDetail> {
    return this.http.get<PacienteDetail>(this.apiUrl);
  }

  

}





 

