import { Component, EventEmitter, inject, OnInit, Output, Signal, signal } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { Collection } from '../../model/collection.type';
import { Router } from '@angular/router';
import { slugify } from '../../utils/slugify';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-collection-list-component',
  imports: [],
  templateUrl: './collection-list.component.html',
  styleUrl: './collection-list.component.scss'
})
export class CollectionListComponent {

  selectedItem!: Collection;
  collectionItems = signal<Collection[]>([]);

  private readonly collectionService = inject(CollectionService);

  @Output() collectionsEmitter = new EventEmitter<Collection[]>();
  @Output() currentCollectionEmitter = new EventEmitter<Collection>;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeCollections();
  }

  private initializeCollections(): void {
    // const collections: Array<Collection> = this.collectionService.get('collections');
    this.collectionService.getCollectionsFromAPI()
    .pipe(
      catchError(err => {
        console.log(err);
        throw err;
      })
    )
    .subscribe(( data ) => {
      const collections: Array<Collection> = data;

      if (collections.length > 0) {
        //collections.unshift({ id: -1, name: 'Todos' });
        //this.collectionItems.set([{ id: -1, name: 'Todos' }, ...collections]);
        this.collectionItems.set(collections);
    
        const defaultCollection = this.collectionItems()[0];
        this.selectItem(defaultCollection);
  
        this.collectionsEmitter.emit(collections);
      }
    });
  }

  private selectItem(item: Collection): void {
    this.selectedItem = item;
    this.currentCollectionEmitter.emit(item)
  }

  handleClick(item: Collection): void {
    this.selectItem(item);
    this.navigateToCollection(item);
  }

  private navigateToCollection(collection: Collection): void {
    const slug = slugify(collection.name);
    this.router.navigate(['jogos', slug]);
  }
}
