import { Injectable } from "@angular/core"
import { Http, Response }  from "@angular/http";
import {  Observable } from "rxjs/Rx";
import { Card } from "../models/card";

@Injectable()
export class CardService {
    private baseUrl: string = ""; // base url to get data   
    constructor(private http: Http) {
    }

    // create Card
    getAll(): Observable<Card[]> {
        let cards$ = this.http
            .get(`${this.baseUrl}/cards`, {headers: this.getHeaders()})
            .map(mapCards);
        return cards$
    }

    // add header dependency
    private getHeaders() {
        let headers = new Headers();
        // get headers here
        return headers;
    }

    save(card: Card): Observable<Card> {
        // return this.http.put
    }

    function mapCards(response: Response){
        // reutrn crads
    }
}