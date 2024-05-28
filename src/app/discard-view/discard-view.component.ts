import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';

@Component({
    selector: 'app-discard-view',
    templateUrl: './discard-view.component.html',
    styleUrls: ['./discard-view.component.css']
})

export class DiscardViewComponent implements OnInit { 

    get game() {
		return this.gameService.game;
	}

    discardAndDraw(index) {
        let gameCopy = this.gameService.gameCopy.copy();
        let oldGame = this.gameService.oldGameCopy.copy();
        let newCards = 0;
        
        gameCopy.scrap.push(gameCopy.oneOff);

        if (index) {
            gameCopy.scrap.push(gameCopy.players[1].hand[index]);
            gameCopy.players[1].hand.splice([index], 1);
        }
        gameCopy.oneOff = null;
        
       
        while (newCards < 3 && gameCopy.players[0].hand.length < 8) {
            gameCopy.players[1].hand.push(gameCopy.deck.shift());
            newCards++;
        }
        
        gameCopy = this.gameService.botBrain.decideLegalMoves(gameCopy);
        // Add change to history and update game
        this.gameService.update(oldGame, gameCopy);
        this.gameService.selected = null;
        this.gameService.selIndex = null;
        this.gameService.chooseDiscard = false;
    }
    
    
    
    constructor(public gameService: GameService) { }
    ngOnInit(){}
}