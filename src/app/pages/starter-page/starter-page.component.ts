import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-starter-page',
  imports: [ButtonComponent],
  templateUrl: './starter-page.component.html',
  styleUrl: './starter-page.component.scss'
})
export class StarterPage {
  constructor (private router: Router) {}

  openGameList() {
    this.router.navigate(['jogos/todos'])
  }
}
