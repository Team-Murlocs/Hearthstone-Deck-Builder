import { Component, OnInit, Input } from "@angular/core";
import { CardService } from "../../services/card.service";
import { Card } from "../../models/card";
import { Router, Params, Route, ActivatedRoute } from "@angular/router"
import { sets } from "../../utils/sets";
import { PaginationInstance } from "ng2-pagination";

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

    
    //Pagination

    public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {

        id: 'advanced',

        itemsPerPage: 20,

        currentPage: 1
    };


    //


    cards: Card[];
    error: any;
    cardType: string;

    utilsNumber: number;

    type: string = "Basic";


   
    constructor(private cardService: CardService, private route: ActivatedRoute,
  private router: Router) {
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
                    console.log(this.cards);                                        
                },
                err => {
                    console.log("Error")
                    console.log(err);
                }
            )
    }

     onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }

};