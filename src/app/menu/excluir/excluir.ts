import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Importações corretas
import { FarmaciaComponent } from '../../core/services/farmacia-component';

@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './excluir.html',
  styleUrl: './excluir.css'
})
export class Excluir {

idExcluir: number | null = null;
  mensagemSucesso: string = '';
  erroMensagem: string = '';

  // CONSTRUCTOR correto com Router injetado
  constructor(
    private medicamentosService: FarmaciaComponent,
    private router: Router   // <- AQUI!
  ) { }

  excluirMedicamento(): void {
    this.mensagemSucesso = '';
    this.erroMensagem = '';

    if (this.idExcluir != null) {
      this.medicamentosService.excluir(this.idExcluir).subscribe({
        next: () => {
          this.router.navigate(['/listagem']); // Navega após excluir
          //this.mensagemSucesso = `Cliente com ID ${this.idExcluir} excluído com sucesso.`;
          //this.idExcluir = null;
        },
        error: () => {
          this.erroMensagem = `Erro ao excluir o cliente.`;
        }
      });
    }
  }  

}
