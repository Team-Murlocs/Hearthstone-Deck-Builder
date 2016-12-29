import { Injectable } from "@angular/core"
import { Http, Response, Headers, RequestOptions }  from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Card } from "../models/card";

@Injectable()

export class Requester<T> {
    private http: Http;
    private headersMashape = new Headers({"X-Mashape-Key": "a0NtL810oxmshwn6kFSSmZXRQZIVp1OrEpdjsno3N9GQVZSHzD"});
    public options = new RequestOptions({ headers: this.headersMashape});


    constructor(http: Http) {
        this.http = http;
    }

    public get(url: string): Observable<T[]> {
        return this.http.get(url).map(res => JSON.parse(res.json()));
    }

    public getFromApi(url: string, options: RequestOptions): Observable<T[]> {
        return this.http
        .get(url, options)
        .map(res => res.json());
    }
}