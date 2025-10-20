import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FarmaciaComponent } from '../../core/services/farmacia-component';
import { Farmacia } from '../../core/types/types';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consultar.html',
  styleUrl: './consultar.css'
})
export class Consultar {
  idBusca: number | null = null;
  medicamentoEncontrado: Farmacia | null = null;
  erroBusca: string = '';

  constructor(private medicamentosService: FarmaciaComponent) { }

  buscarMedicamento(): void {
    this.erroBusca = '';
    this.medicamentoEncontrado = null;

    if (this.idBusca != null) {
      
      this.medicamentosService.buscarPorId(this.idBusca).subscribe({
        next: (medicamento) => {
          if (medicamento) {
            this.medicamentoEncontrado = medicamento;
          } else {
            this.erroBusca = 'Medicamento não encontrado.';
          }
        },
        error: () => {
          this.erroBusca = 'Erro ao buscar medicamento.';
        }
      });
    }
  }
}
