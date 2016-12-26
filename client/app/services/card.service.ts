import { Injectable } from "@angular/core"
import { Http, Response, Headers, RequestOptions }  from "@angular/http";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import {  Observable } from "rxjs/Rx";
import { Card } from "../models/card";
import { Requester } from "./requester.service";

@Injectable()
export class CardService {
    private baseUrl: string = "https://omgvamp-hearthstone-v1.p.mashape.com/cards"; // base url to get data
    private headersMashape = new Headers({"X-Mashape-Key": "a0NtL810oxmshwn6kFSSmZXRQZIVp1OrEpdjsno3N9GQVZSHzD"});
    public options = new RequestOptions({ headers: this.headersMashape});

    
    private requester: Requester<Card>;
    constructor(requester: Requester<Card>) {
        this.requester = requester;
    }    

    getAllCards(): Observable<Card[] | Card> {
        return this.requester.getFromApi(this.baseUrl, this.options);
    }
}