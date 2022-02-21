import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!: string;
  senha!: string;
  loginError!: boolean;
  cadastrando!: boolean;
  mensagemSucesso!: string;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }
  
  cadastrandoUser(event: any){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){

  }
    

}
