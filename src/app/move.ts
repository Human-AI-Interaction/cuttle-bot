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
        console.log("finding resulting games after possible counter-moves");
        let resulting_games = [];
        if(game.player.hand.length < 8 && game.deck.length > 0){
            let game_copy = cloneDeep(game);

            game_copy.player.hand.push(game_copy.deck.shift());

            resulting_games.push(game_copy);
        }
        // Assume player plays the ten of spades to evaluate player's offense
        let player_plays_ten = cloneDeep(game);
        player_plays_ten.player.points.push(new Card(3, 10));
        player_plays_ten.player.hand.shift();
        resulting_games.push(player_plays_ten);

        console.log(resulting_games);
        return resulting_games;
    }

    constructor(name, game, card?, index?, target?, target_index?) {
        console.log("Making new move with resulting game:");
        console.log(game);

        this.name = name;
        this.game = game;
        this.card = card;
        this.index = index;
        this.target = target;
        this.target_index = target_index;
        this.results = this.findResults(this.game);
    }
}
