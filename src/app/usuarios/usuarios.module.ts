import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { FiltroPipe } from './filtroPipe/filtro.pipe'


@NgModule({
  declarations: [
    UsuariosFormComponent,
    UsuariosListaComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule
  ],
  exports: [
    UsuariosFormComponent,
    UsuariosListaComponent

  ]
})
export class UsuariosModule { }
