import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ListAdsComponent } from './list-ads/list-ads.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'list-ads', component: ListAdsComponent},
    {path: '**', redirectTo: ''}
]

//compilando as rotas para a angular entender
//ModuleWithProviders: routing faz com que aconst tenha as configs de rota
//forRoot pq tem as rotas raiz
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
