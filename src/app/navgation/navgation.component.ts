import { Component, Input, OnInit } from '@angular/core';

import { Pagination } from '../shared/models/pagination.model';

@Component({
    selector: 'app-navgation',
    templateUrl: './navgation.component.html',
    styleUrls: ['./navgation.component.scss']
})
export class NavgationComponent implements OnInit {
    @Input() pagination: Pagination;
    @Input() disabled: boolean;

    constructor() {}

    ngOnInit() {}
}
