import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SwapiService } from '../shared/services/swapi.service';

import { Character } from '../shared/models/character.model';
import { Pagination } from '../shared/models/pagination.model';

@Component({
    selector: 'app-characters-list',
    templateUrl: './characters-list.component.html',
    styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
    charactersList: Array<Character> = [];
    pagination: Pagination = new Pagination();

    constructor(private swapiService: SwapiService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.charactersList = [];
            const page: number = +paramMap.get('page');

            if (isNaN(page)) {
                this.charactersList = null;
                return false;
            }

            this.swapiService.getCharactersByPage(page).subscribe(
                (res) => {
                    this.charactersList = res.results;
                    this.pagination.count = res.count;
                    this.pagination.next = res.next;
                    this.pagination.previous = res.previous;
                    this.pagination.activePage = page;

                    const total = 10 * page;
                    this.pagination.showing = total < this.pagination.count ? total : this.pagination.count;
                },
                () => {
                    this.charactersList = null;
                }
            );
        });
    }

    getCharacterNumber(index: number) {
        return this.pagination.showing - this.charactersList.length + (index + 1);
    }
}
