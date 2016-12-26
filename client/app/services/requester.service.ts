import { Injectable } from "@angular/core"
import { Http, Response }  from "@angular/http";
import {  Observable } from "rxjs/Rx";
import { Card } from "../models/card";

@Injectable()

export class Requester<T> {
    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    public get(url: string): Observable<T[]> {
        return this.http.get(url).map(res => JSON.parse(res.json()));
    }


}