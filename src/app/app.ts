import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './cabecalho/cabecalho';
import { Rodape } from './rodape/rodape';
import { Principal } from './principal/principal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecalho, Rodape, Principal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'teste_prova';
}
