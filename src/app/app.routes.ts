import { Routes } from '@angular/router';
import { Cabecalho } from './cabecalho/cabecalho';
import { Principal } from './principal/principal';
import { Cadastrar } from './menu/cadastrar/cadastrar';
import { Consultar } from './menu/consultar/consultar';
import { Excluir } from './menu/excluir/excluir';
import { Listar } from './menu/listar/listar';

export const routes: Routes = [
    {path:'', component: Principal},
    {path: 'cadastrar', component: Cadastrar, title: 'Cadastro'},
    {path: 'consultar', component: Consultar, title: 'Consulta'},
    {path: 'excluir', component: Excluir, title: 'Exclusão'},
    {path: 'listar', component: Listar, title: 'Listagem'},
    {path:'**', redirectTo:''}
];
