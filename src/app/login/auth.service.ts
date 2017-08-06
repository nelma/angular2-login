import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {

    if(usuario.nome === 'teste' && usuario.senha === '123456') {

      /**TODO
       * validacao devera ir para o server, servidor faria autenticacao e retorna um token
       **/
       
       this.usuarioAutenticado = true;
       this.mostrarMenuEmitter.emit(true);
       this.router.navigate(['/list-ads']);
    } else {
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
