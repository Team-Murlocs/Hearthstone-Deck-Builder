import { Injectable } from "@angular/core"
import { Http, Response, Headers, RequestOptions }  from "@angular/http";
import {  Observable } from "rxjs/Rx";
import { Card } from "../models/card";
import { Requester } from "./requester.service";

@Injectable()
export class CardService {
    private baseUrl: string = "https://omgvamp-hearthstone-v1.p.mashape.com/"; // base url to get data        
    private headersMashape = new Headers({"X-Mashape-Key": "a0NtL810oxmshwn6kFSSmZXRQZIVp1OrEpdjsno3N9GQVZSHzD"});
    public options = new RequestOptions({ headers: this.headersMashape});

    private card: Card;

    private requester: Requester<Card>;
    constructor(requester: Requester<Card>) {
        this.requester = requester;
    }

    getAllCards(): Observable<Card[] | Card> {
        return this.requester.getFromApi(`${this.baseUrl}cards`, this.options);
    }

    getAllCardsByType(type: string): Observable<Card[] | Card> {
        return this.requester.getFromApi(`${this.baseUrl}cards`, this.options).map(
            (allCards) => {
                let cards = allCards[type];
                let result = [];
                console.log(cards);
                for (let i = 0; i < cards.length; i++) {
                    this.card = cards[i];
                    if (cards[i].type !== "Enchantment" && cards[i].type !== "Hero" && cards[i].type !== "Hero Power" && cards[i].name !== "The Coin"
                        && cards[i].cardSet !== "Tavern Brawl" && cards[i].cardSet !== "Hero Skins"
                        && cards[i].cardSet !== "Missions" && cards[i].cardSet !== "Credits"
                        && cards[i].cardSet !== "System" && cards[i].cardSet !== "Debug") {
                        result.push(cards[i]);
                    }
                }
                return result;
            }
        );
    }

    getCardById(name: string, type: string): Observable<Card[] | Card> {
        return this.requester.getFromApi(`${this.baseUrl}cards/${name}`, this.options);
    }

    getCardByClass(playerClass: string): Observable<Card[] | Card> {
        return this.requester.getFromApi(`${this.baseUrl}cards/classes/${playerClass}`, this.options).map(
            (allCards) => {
                let cards = allCards as Card[];
                let result = [];
                for (let i = 0; i < cards.length; i++) {
                    if (cards[i].type !== "Enchantment" && cards[i].type !== "Hero" && cards[i].type !== "Hero Power" && cards[i].name !== "The Coin"
                        && cards[i].cardSet !== "Tavern Brawl" && cards[i].cardSet !== "Hero Skins"
                        && cards[i].cardSet !== "Missions" && cards[i].cardSet !== "Credits"
                        && cards[i].cardSet !== "System" && cards[i].cardSet !== "Debug") {
                        result.push(cards[i]);
                    }
                }

                return result;
            }
        );
    }
}