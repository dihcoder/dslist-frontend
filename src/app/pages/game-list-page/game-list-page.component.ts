import { Component, Signal } from '@angular/core';
import { CollectionListComponent } from '../../components/collection-list/collection-list.component';
import { GameListComponent } from '../../components/game-list/game-list.component';
import { Collection } from '../../model/collection.type';

@Component({
  selector: 'app-game-list-page',
  imports: [ CollectionListComponent, GameListComponent ],
  templateUrl: './game-list-page.component.html',
  styleUrl: './game-list-page.component.scss'
})
export class GameListPage {

  collections!: Collection[];
  currentCollection!: Collection;

  setCollectionList(collections: Collection[]) {
    this.collections = collections;
  }

  setCurrentCollection(collection: Collection) {
    this.currentCollection = collection;
  }

}
