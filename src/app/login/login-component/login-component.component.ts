import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToCadastro() {
    this.router.navigate(['/cadastro']);
  }

  Login() {
    sessionStorage.setItem("token", 'teste');
    this.router.navigate(['app/dashboard'])
  }
}
