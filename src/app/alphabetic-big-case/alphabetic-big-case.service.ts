import { Injectable } from '@angular/core';
import { GameService } from './../game.service'
@Injectable()
export class AlphabeticBigCaseService {

  constructor(private gameService: GameService) {

  }


  getAlphabeticBigcase(url,gameId,kidId){
   return this.gameService.postAPIData(localStorage.getItem('token'),url,{ "game_id": gameId,
   "nidara_kid_profile_id": kidId })
  }

  getData(url){
    return this.gameService.getAPIData(localStorage.getItem('token'),url);
  }

}
