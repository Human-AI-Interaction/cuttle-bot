import { Injectable } from '@angular/core';
import { Game } from './game';
import { game } from './mock_game'; 

@Injectable({
  providedIn: 'root'
})

export class GameService {
	game: Game;
	constructor() {
		this.game = game;
	}
}