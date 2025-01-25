import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { GameComponent } from './pages/game/game.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'collections',
        component: CollectionsComponent
    },
    {
        path: 'game',
        component: GameComponent
    }
];
