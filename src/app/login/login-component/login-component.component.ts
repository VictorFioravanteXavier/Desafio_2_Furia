import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCadastro() {
    this.router.navigate(['/cadastro']);
  }

  Login() {
    if (this.email === 'admin@furia.com' && this.senha === '123') {
      sessionStorage.setItem('token', 'admin');
      this.router.navigate(['/admin']);
    } else if (this.email === 'user@furia.com' && this.senha === '123') {
      sessionStorage.setItem('token', 'user');
      this.router.navigate(['/user']);
    } else {
      alert('Login inválido!');
    }
  }
}
