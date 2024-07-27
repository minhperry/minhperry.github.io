import { Component } from '@angular/core';
import { GameService } from '../../services/game/game.service';

@Component({
  selector: 'app-skyblock',
  templateUrl: './skyblock.component.html',
  styleUrl: './skyblock.component.css'
})
export class SkyblockComponent {
  currentGameConfig: any;
  constructor(gameService: GameService) {}
}
