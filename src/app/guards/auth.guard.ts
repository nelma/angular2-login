import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate {
//implementar a interface CanActivate torna a classe uma guarda de rota

  //injecao de dep.
  //Router faz o redirecionamento das rotas de forma imperativa
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{

    if(this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['']); //retorna para login, caso nao esteja logado
    return false;  
  }
}
