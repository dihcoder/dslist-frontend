import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { Collection } from '../../model/collection.type';
import { Game } from '../../model/game.type';
import { GameService } from '../../services/game.service';
import { catchError } from 'rxjs';
import { RatingsComponent } from '../../components/ratings/ratings.component';

@Component({
  selector: 'app-game',
  imports: [ButtonComponent, RatingsComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePage implements OnInit {

  collection: Signal<Collection> = signal(history.state.collection);
  private gameId = history.state.gameId;
  game!: Signal<Game>;
  gameIsLoaded = signal(false);

  private readonly gameService = inject(GameService);

  ngOnInit(): void {
    this.getGameDetails(this.gameId);
  }

  private getGameDetails(gameId: number) {
    this.gameService.getGameFromAPI(gameId).pipe(
      catchError(err => {
        console.log(err);
          throw err;
      })
    ).subscribe(data => {
      const GAME = signal<Game>(data);
      this.game = GAME;
      this.gameIsLoaded.set(true);
    })
  }

  constructor (private router: Router) {}

  

  navigateToGameList() {
    this.router.navigate(['jogos/todos'])
  }
}
