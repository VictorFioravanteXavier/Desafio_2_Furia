import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CadastrarComponentComponent } from './cadastrar-component/cadastrar-component.component';

const routes: Routes = [
  {path: '', component: LoginComponentComponent},
  {path: 'cadastro', component: CadastrarComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
