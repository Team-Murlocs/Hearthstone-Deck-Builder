import { Injectable } from "@angular/core";
import { Deck } from "../models/deck";
import { Requester } from "./requester.service";
import { Http, Response, Headers, RequestOptions }  from "@angular/http";
import { Observable } from "rxjs/Rx";
// Add user dependency

@Injectable()

export class DeckService {

    private serverUrl: string = ""; // server api      
    private headersServer = new Headers({"Content-Type": "application/json"});
    private deckByUserUrl = "/api/getAllDecks/";

    private allDecksUrl = "/api/getAllDecks";

    private postDeckUrl = "/api/addDeck";
    public options = new RequestOptions({ headers: this.headersServer});

    private requester: Requester<Deck>;

    constructor(requester: Requester<Deck>, ) {
        this.requester = requester;
    }

    getAllUserDecks(email: string): Observable<Deck[] | Deck> {
        return this.requester.getFromApi(`${this.deckByUserUrl}${email}`, this.options);
    }
    getAllDecks(): Observable<Deck[] | Deck> {
        return this.requester.getFromApi(`${this.allDecksUrl}`, this.options);
    }

    postDeck(deck: Deck): Observable<Deck[] | Deck> {
        return this.requester.post(`${this.postDeckUrl}`, deck, this.options);
    }
}