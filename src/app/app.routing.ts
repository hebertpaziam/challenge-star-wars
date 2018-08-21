import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters-list/characters-list.component';

const ROUTES: Routes = [
    {
        path: 'lista',
        component: AppComponent,
        children: [
            {
                path: ':page',
                component: CharactersListComponent
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '1'
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lista'
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'lista'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRouting {}
