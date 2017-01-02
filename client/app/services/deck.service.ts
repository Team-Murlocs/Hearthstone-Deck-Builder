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

    private postDeckUrl = "api/addDeck";
    public options = new RequestOptions({ headers: this.headersServer});

    private requester: Requester<Deck>;

    constructor(requester: Requester<Deck>, ) {
        this.requester = requester;
    }

    getAllUserDecks(email: string): Observable<Deck[] | Deck> {
        return this.requester.getFromApi(`${this.deckByUserUrl}${email}`, this.options);
    }

    postDeckToUser() {
        // this.requester.post(serverUrl, itemToPost, options);
    }

    getDeckFromUser() {
        // this.requester.get(url, options);
    }

    postDeck(): Observable<Deck[] | Deck> {
        return this.requester.getFromApi(`${this.postDeckUrl}`, this.options);
    }
}