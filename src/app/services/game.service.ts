import { inject, Injectable } from '@angular/core';
import { Game } from '../model/game.type';
import { Position } from '../model/position.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  http = inject(HttpClient)

  constructor() { }

  getCollectionGamesFromAPI(collectionId: number) {
  const COLLECTION_GAMES_URL = `http://localhost:8080/collections/${collectionId}/games`;
    return this.http.get<Game[]>(COLLECTION_GAMES_URL)
  }

  getAllGamesFromAPI() {
    const ALL_GAMES_URL = `http://localhost:8080/games`;
      return this.http.get<Game[]>(ALL_GAMES_URL)
  }

  getGameFromAPI(gameId: number) {
    const GAME_URL = `http://localhost:8080/games/${gameId}`
    return this.http.get<Game>(GAME_URL);
  }
}
