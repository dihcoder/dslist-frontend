import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list-page',
  imports: [],
  templateUrl: './game-list-page.component.html',
  styleUrl: './game-list-page.component.scss'
})
export class GameListPageComponent {

  constructor(private router: Router) {}

  handleGameClick() {
    this.router.navigate(['jogos/colecao/jogo'])
  }

}
