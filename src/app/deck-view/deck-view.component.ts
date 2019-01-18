import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
@Component({
  selector: 'app-deck-view',
  templateUrl: './deck-view.component.html',
  styleUrls: ['./deck-view.component.css']
})
export class DeckViewComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

}
