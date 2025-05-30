import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { LoginComponentComponent } from './login-component/login-component.component';
import { CadastrarComponentComponent } from './cadastrar-component/cadastrar-component.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponentComponent,
    CadastrarComponentComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class LoginModule { }
