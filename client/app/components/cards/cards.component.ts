import { Component, OnInit, Input } from "@angular/core";
import { CardService } from "../../services/card.service";
import { Card } from "../../models/card";
import { Router, Params, Route, ActivatedRoute } from "@angular/router"
import { sets } from "../../utils/sets";
import { PaginationInstance } from "ng2-pagination";
import {Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';


@Component({
    selector: "cards",
    templateUrl: "cards.component.html",
    styles:
        [`
        .mdl-grid {
            max-width: 1000px;
        }
        .mdl-card {
            max-width: 200px;
        }
        .mdl-card__media {
            background-color: #fff;
            margin: 0;
        }
        .mdl-card__title-text {
            height: 150;
        }
        .mdl-card__media > img {
            max-width: 100%;
        }
        .mdl-card__actions {
            display: flex;
            box-sizing:border-box;
            align-items: center;
        }
        .mdl-card__actions > .mdl-button--icon {
            margin-right: 3px;
            margin-left: 3px;
        }
        .mdl-card .mdl-layout-spacer {
            background-color: #fff
        }
        img {
            max-width: 170px;
        }
        `]
})

export class CardsComponent implements OnInit {

    // Pagination

    public filter: string = "";
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {

        id: "advanced",

        itemsPerPage: 20,

        currentPage: 1
    };


    // End Pagination


    cards: Card[];
    error: any;
    cardType: string;

    utilsNumber: number;

    type: string = "Basic";



    // Sets initial value to true to show loading spinner on first load
    loading: boolean = true;

    constructor(private cardService: CardService, private route: ActivatedRoute,
  private router: Router) {
      router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }
 // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading = true;
        }
        if (event instanceof NavigationEnd) {
            this.loading = true;
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.loading = true;
        }
        if (event instanceof NavigationError) {
            this.loading = true;
        }
    }

     ngOnInit() {
        this.route.params.subscribe(params => {
            this.utilsNumber = params["number"];
            this.type = sets[this.utilsNumber];
            this.showCards(this.type);
        });

    }

    showCards(type) {
        this.cardService.getAllCardsByType(type)
            .subscribe(
                cards => {

                    this.cards = cards as Card[];
		    this.loading=false;        
                    console.log(this.cards);
                },
                err => {
                    console.log("Error")
                    console.log(err);
                }
            )
    }

     onPageChange(pageNumber: number) {
        console.log("change to page", pageNumber);
        this.config.currentPage = pageNumber;
    }

};