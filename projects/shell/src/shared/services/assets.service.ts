import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class AssetsService {
    constructor() { }

    getImage(name: string): string {
        return `assets/${name}`;
    }

}