import { Injectable } from '@angular/core';
import { Farmacia } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaComponent {
  
  private readonly API = 'http://localhost:3000/medicamentos';

  constructor(private http: HttpClient) {}
  listar(): Observable<Farmacia[]> {
    return this.http.get<Farmacia[]>(this.API);
  }

  salvar(medicamento: Farmacia): Observable<Farmacia> {
    return this.http.post<Farmacia>(this.API, medicamento);
  }

  excluir(codigo: number): Observable<Farmacia> {
    return this.http.delete<Farmacia>(this.API + `/${codigo}`);
  }

  buscarPorId(id: number): Observable<Farmacia | undefined> {
    return this.http.get<Farmacia>(this.API + `/${id}`);
  }

}
