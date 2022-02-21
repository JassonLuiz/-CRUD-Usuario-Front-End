import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './usuarios/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private htpp: HttpClient ) { }

  salvar( usuario: Usuario) : Observable<Usuario> {
    return this.htpp.post<Usuario>('http://localhost:8084/api/usuario', usuario);
  }

  getUsuarios() : Observable<Usuario[]> {
    return this.htpp.get<Usuario[]>('http://localhost:8084/api/usuario');
  }

  getUsuarioById(id: number) : Observable<Usuario>{
    return this.htpp.get<any>(`http://localhost:8084/api/usuario/${id}`);
  }

  atualizar( usuario: Usuario) : Observable<any> {
    return this.htpp.put<Usuario>(`http://localhost:8084/api/usuario/${usuario.id}`, usuario);
  }

  deletar(usuario: Usuario) : Observable<any> {
    return this.htpp.delete<any>(`http://localhost:8084/api/usuario/${usuario.id}`);
  }

  deletarTodos() : Observable<Usuario[]> {
    return this.htpp.delete<Usuario[]>('http://localhost:8084/api/usuario');
  }
}
