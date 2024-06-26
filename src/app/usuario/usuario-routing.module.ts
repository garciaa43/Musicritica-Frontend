import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioRegistrarComponent } from './usuario-registrar/usuario-registrar.component';
import { UsuarioEsqueceuSenhaComponent } from './usuario-esqueceu-senha/usuario-esqueceu-senha.component';
import { UsuarioRedefinirSenhaComponent } from './usuario-redefinir-senha/usuario-redefinir-senha.component';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { AdmDenunciaComponent } from './adm-denuncia/adm-denuncia.component';

const routes: Routes = [
  {path: 'login', component: UsuarioLoginComponent},
  {path: 'registrar', component: UsuarioRegistrarComponent},
  {path: 'esqueceu-senha',component: UsuarioEsqueceuSenhaComponent},
  {path: 'redefinir-senha/:token', component: UsuarioRedefinirSenhaComponent},
  {path: 'perfil/:id', component: UsuarioPerfilComponent},
  {path: 'denuncia', component: AdmDenunciaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
