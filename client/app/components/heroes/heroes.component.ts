import { Component } from "@angular/core"
import { Auth } from "../../services/auth.service"

@Component({
    selector: "heroes",
    templateUrl: "heroes.component.html",
    styles: [`
        .mdl-grid {
            max-width: 800px;
        }
        .mdl-card {
            max-width: 256px;
        }
        .mdl-card__media {
            background-color: #fff;
            margin: 0;
        }
        .mdl-card__title-text {
            height: 150;
        }
        .mdl-card__media > img {
            max-width: 120%;
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
        * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;
            }


.pic {
    border: 0px solid #fff;
    float: left;
    height: 129px;
    width: 256px;
    margin: 0px;
    overflow: hidden;
}


/*GROW*/

.grow img {
    height: 129px;
    width: 256px;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
}

.grow img:hover {
    height: 150px;
    width: 300px;
}
    `]
})

export class HeroesComponent {
    heroesList = [
         {
             name: "Garrosh Hellscream",
             class: "Warrior",
             img: "http://us.battle.net/hearthstone/static/images/game-guide/heroes/artwork-thumbnail-garrosh.jpg"
         },
         {
             name: "Thrall",
             class: "Shaman",
             img: "http://us.battle.net/hearthstone/static/images/game-guide/heroes/artwork-thumbnail-thrall.jpg"
         },
         {
             name: "Valeera Sanguinar",
             class: "Rogue",
             img: "http://us.battle.net/hearthstone/static/images/game-guide/heroes/artwork-thumbnail-valeera.jpg"
         },
         {
             name: "Uther Lightbringer",
             class: "Paladin",
             img: "http://us.battle.net/hearthstone/static/images/game-guide/heroes/artwork-thumbnail-uther.jpg"
         },
         {
             name: "Rexxar",
             class: "Hunter",
             img: "http://us.battle.net/hearthstone/static/images/game-guide/heroes/artwork-thumbnail-rexxar.jpg"
         },
         {
             name: "Malfurion Stormrage",
             class: "Druid",
             img: "http://us.battle.net/hearthstone/static/images/game-guide/heroes/artwork-thumbnail-malfurion.jpg"
         },
         {
             name: "Gul'dan",
             class: "Warlock",
             img: "http://us.battle.net/hearthstone/static/images/game-guide/heroes/artwork-thumbnail-guldan.jpg"
         },
         {
             name: "Jaina Proudmoore",
             class: "Mage",
             img: "http://us.battle.net/hearthstone/static/images/game-guide/heroes/artwork-thumbnail-jaina.jpg"
         },
         {
             name: "Anduin Wrynn",
             class: "Priest",
             img: "http://us.battle.net/hearthstone/static/images/game-guide/heroes/artwork-thumbnail-anduin.jpg"
         }
     ]

    constructor() {
    }
}