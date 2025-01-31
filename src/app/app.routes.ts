import { Routes } from '@angular/router';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { GameListPageComponent } from './pages/game-list-page/game-list-page.component';
import { GameInfoPageComponent } from './pages/game-info-page/game-info-page.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: InitialPageComponent
    },
    {
        path: 'jogos',
        component: GameListPageComponent
    },
    {
        path: 'jogos/:collection-name/:game-name',
        component: GameInfoPageComponent
    }
];
