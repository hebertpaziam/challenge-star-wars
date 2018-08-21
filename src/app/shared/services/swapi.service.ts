import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class SwapiService {
    constructor(private httpClient: HttpClient) {}

    getCharactersByPage(page: number): Observable<any> {
        return this.httpClient.get(`https://swapi.co/api/people/?page=${page}`, { withCredentials: false });
    }

    getCharacterDetails(id: number): Observable<any> {
        return this.httpClient.get(`https://swapi.co/api/people/${id}`, { withCredentials: false });
    }
}
