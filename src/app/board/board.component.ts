import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	game: Game;
	getGame() {
		this.game = this.gameService.game;
	}

	constructor(private gameService: GameService) {}

	ngOnInit() {
		this.getGame();
	}

}
