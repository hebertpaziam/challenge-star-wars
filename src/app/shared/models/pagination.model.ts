export class Pagination {
    count: number;
    next: string;
    previous: string;
    showing: number;
    activePage: number;

    constructor() {
        this.count = 0;
        this.showing = 0;
    }
}
