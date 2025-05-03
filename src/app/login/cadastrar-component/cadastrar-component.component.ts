import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-component',
  templateUrl: './cadastrar-component.component.html',
  styleUrls: ['./cadastrar-component.component.scss']
})
export class CadastrarComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigate(['/'])
  }
}
