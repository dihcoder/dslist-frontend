import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-info-page',
  imports: [],
  templateUrl: './game-info-page.component.html',
  styleUrl: './game-info-page.component.scss'
})
export class GameInfoPageComponent {

constructor(private router: Router) {}

  returnToGameList() {
    this.router.navigate(['jogos'])
  }

}
