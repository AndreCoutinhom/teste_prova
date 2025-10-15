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
  // Buscar os registros do arquivo `data_base.json`
  listar(): Observable<Farmacia[]> {
    return this.http.get<Farmacia[]>(this.API);
  }

  // Salvar novos registros no arquivo `data_base.json`
  salvar(medicamento: Farmacia): Observable<Farmacia> {
    return this.http.post<Farmacia>(this.API, medicamento);
  }

  // Excluir registros do arquivo `data_base.json`
  excluir(id: number): Observable<Farmacia> {
    return this.http.delete<Farmacia>(this.API + `/${id}`);
  }
}
