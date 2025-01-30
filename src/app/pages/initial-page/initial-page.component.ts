import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  imports: [],
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.scss'
})
export class InitialPageComponent {
  constructor (private router: Router) {}

  openGameList() {
    this.router.navigate(['collections'])
  }
}
