import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Farmacia } from '../../core/types/types';
import { FarmaciaComponent } from '../../core/services/farmacia-component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})

export class Cadastrar {
  titulo = 'Cadastro de medicamentos';
  medicamento: Farmacia = {} as Farmacia;

  constructor(
    private service: FarmaciaComponent,
    private router: Router
  ) { }

  submeter() {
    this.service.salvar(this.medicamento).subscribe(() => {
      this.router.navigate(['/listagem']);
    });
  }


}




