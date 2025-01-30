import { inject, Injectable } from '@angular/core';
import { Collection } from '../model/collection.type';
import { Game } from '../model/game.type';
import { Position } from '../model/position.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {

  http = inject(HttpClient)

  private readonly collections: Collection[] = [
    { id: 1, name: 'Aventura' },
    { id: 2, name: 'Corrida' },
    { id: 3, name: 'Luta' },
    { id: 4, name: 'Raciocínio' },
  ];

  constructor() {}

  /**
   * Retorna dados com base no endpoint solicitado.
   * @param endpoint Endpoint no formato string.
   * @returns Dados correspondentes ao endpoint.
   */
  get(endpoint: string): any {
    const urlFragments = endpoint.split('/');
    if (urlFragments.length === 1 && urlFragments[0] === 'collections')
      return this.collections;
    else throw  new Error(`Recurso inválido: ${urlFragments[0]}`);
  }

  getCollectionsFromAPI() {
    const COLLECTIONS_URL = `http://localhost:8080/collections`;
    return this.http.get<Collection[]>(COLLECTIONS_URL)
  }
}