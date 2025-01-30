import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Game } from '../../model/game.type';
import { Collection } from '../../model/collection.type';
import { GameService } from '../../services/game.service';
import { catchError } from 'rxjs';
import { slugify } from '../../utils/slugify';
import { Router } from '@angular/router';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-list-component',
  imports: [DragDropModule, CommonModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {

  gameList = signal<Game[]>([]);
  gamesCount = signal(0);
  private _currentCollection!: Collection;
  
  private readonly gameService = inject(GameService);

  constructor(private router: Router){}

  @Input()
  set currentCollection(value: Collection) {
    this._currentCollection = value;
    this.onCollectionChange();
  }

  trackById(index: number, game: any) {
    return game.id;
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.gameList(), event.previousIndex, event.currentIndex);
  }

  get currentCollection(): Collection {
    return this._currentCollection;
  }

  onCollectionChange() {
    if (this.currentCollection) this.loadGamesByCollectionId(this.currentCollection.id)
  }

  ngOnInit(): void {
    //this.loadGamesByCollectionId(Number(this.currentCollection.id));
  }

  private loadGamesByCollectionId(collectionId: number): void {
    collectionId > 0 ? this.getGamesFromCollection(collectionId) : this.getAllGames();
  }

  getGame() {}

  getAllGames() {
    this.gameService.getAllGamesFromAPI()
        .pipe(
          catchError(err => {
            console.log(err);
            throw err;
          })
        )
        .subscribe(( data ) => {
          const GAMES: Array<Game> = data;
          this.gameList.set(GAMES);
          this.gamesCount.set(this.gameList().length);
        });
  }

  getGamesFromCollection(collectionId: number) {
    this.gameService.getCollectionGamesFromAPI(collectionId)
        .pipe(
          catchError(err => {
            console.log(err);
            throw err;
          })
        )
        .subscribe(( data ) => {
          const GAMES: Array<Game> = data;
          this.gameList.set(GAMES);
          this.gamesCount.set(this.gameList().length);
        });
  }

  handleClick(game: Game): void {
    this.navigateToGame(game);
  }

  private navigateToGame(game: Game): void {
    const slug = slugify(game.title);
    const collectionSlug = slugify(this.currentCollection.name)
    const routerState = { state: { collection: this.currentCollection, gameId: game.id } };
    this.router.navigate([`jogos`, `${collectionSlug}`, slug], routerState);
  }
}