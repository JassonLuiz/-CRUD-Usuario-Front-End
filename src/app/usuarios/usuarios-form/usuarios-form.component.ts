import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { Usuario } from '../usuarios'
import { UsuariosService } from '../../usuarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario: Usuario;
  sucesso: boolean = false;
  erros: String[];
  id: number;

  constructor( 
    private service: UsuariosService, 
    private router: Router,
    private activatedRouter: ActivatedRoute 
    ) {
    this.usuario = new Usuario(); 
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRouter.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id ){
        this.service
          .getUsuarioById(this.id)
          .subscribe(
            response => this.usuario = response,
            errorResponse => this.usuario = new Usuario()
          )
      }
    })
  }

 onSubmite(){
    if(this.id){
      this.service
        .atualizar(this.usuario)
        .subscribe(response => {
            this.sucesso = true;
            this.erros = null;
        }, errorResponse => {
          this.erros = ['Erro ao atualizar o usuário']
        })
    }else{
      this.service
            .salvar(this.usuario)
            .subscribe( response => {
              this.sucesso = true;
              this.erros = null;
              this.usuario = response;
            }, errorResponse => {
              this.sucesso = false;
              this.erros = errorResponse.error.erros;
            })
    }
 }

 voltaParaLista(){
   this.router.navigate(['/usuarios-lista']);
 }

}
