import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions, ConnectionBackend } from '@angular/http';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import {GameRoutingModule} from './game.routing';
import {GameHeaderComponent} from './game-header-component/game-header.component';
import {GameFooterComponent} from './game-footer-component/game-footer.component';
import { GameService  } from './game.service';
import { LoggerService } from './log4ts-services/logger.service';
import { ConsoleLoggerService } from './log4ts-services/console-logger.service';

@NgModule({
  imports: [
    CommonModule,GameRoutingModule,HttpModule,
     BrowserModule // for seprate projects
  ],
  declarations: [GameComponent,GameHeaderComponent,GameFooterComponent],
  providers:[GameService,{ provide: LoggerService, useClass: ConsoleLoggerService }], bootstrap: [GameComponent]
})
export class GameModule { }
