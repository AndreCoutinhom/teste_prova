import { Component, OnInit } from '@angular/core';
import { Farmacia } from '../../core/types/types';
import { FarmaciaComponent } from '../../core/services/farmacia-component';

@Component({
  selector: 'app-listar',
  imports: [],
  templateUrl: './listar.html',
  styleUrl: './listar.css'
})
export class Listar implements OnInit {

listaMedicamentos: Farmacia[] = [];
  constructor(private service: FarmaciaComponent) {}

  
  ngOnInit(): void {
    this.service.listar().subscribe((medicamentos) => {
      this.listaMedicamentos = medicamentos;
    });
  }

  //Esse método serve para excluir um cliente da lista e atualizar a tela automaticamente, sem recarregar a página.
  excluir(codigo: number) {
    if (codigo) {
      this.service.excluir(codigo).subscribe(() => {
        // Remove o cliente com o id correspondente da lista
        this.listaMedicamentos = this.listaMedicamentos.filter(medicamento => medicamento.codigo !== codigo);
      });
    }
  }


}
