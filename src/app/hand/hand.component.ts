import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
	@Input() player: Player;
	constructor() { }

	ngOnInit() {
	}

}
