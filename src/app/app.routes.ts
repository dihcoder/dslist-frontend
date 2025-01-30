import { Routes } from '@angular/router';
import { GameListPage } from './pages/game-list-page/game-list-page.component';
import { GamePage } from './pages/game-page/game-page.component';
import { StarterPage } from './pages/starter-page/starter-page.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: StarterPage
    },
    {
        path: 'jogos',
        component: GameListPage
    },
    {
        path: 'jogos/:collection-name',
        component: GameListPage
    },
    {
        path: 'jogos/:collection-name/:game-name',
        component: GamePage
    }
];
