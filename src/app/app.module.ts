import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MAT_LABEL_GLOBAL_OPTIONS,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouting } from './app.routing';

import { SwapiService } from './shared/services/swapi.service';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { NavgationComponent } from './navgation/navgation.component';

const MaterialModules = [MatButtonModule, MatListModule, MatExpansionModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule];

@NgModule({
    declarations: [AppComponent, CharactersListComponent, NavgationComponent],
    imports: [AppRouting, BrowserModule, HttpClientModule, CommonModule, FormsModule, BrowserAnimationsModule, MaterialModules],
    providers: [SwapiService, { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }],
    bootstrap: [AppComponent]
})
export class AppModule {}
