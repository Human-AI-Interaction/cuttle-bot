import { Card } from './card';
import { Game } from './game';
import { game } from './mock_game';
import { cloneDeep } from 'lodash';

export class Move {
    name: String;
    game: Game; //Result after doing move
    card: Card;
    index: number;
    target: Card;
    target_index: number;
    results: Array<Game>;

    findResults(game: Game) {
        console.log("finding resulting moves");
        let resulting_games = [];
        if(game.player.hand.length < 8 && game.deck.length > 0){
            let game_copy = cloneDeep(game);

            game_copy.player.hand.push(game_copy.deck.shift());

            resulting_games.push(game_copy);
        }
        console.log(resulting_games);
        return resulting_games;
    }

    constructor(name, game, card?, index?, target?, target_index?) {
        this.name = name;
        this.game = game;
        this.card = card;
        this.index = index;
        this.target = target;
        this.target_index = target_index;
        this.results = this.findResults(this.game);
    }
}
