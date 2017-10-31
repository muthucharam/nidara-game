import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabeticBigCaseComponent } from './alphabetic-big-case.component';
import {AlphabeticBigCaseRoutingModule} from './alphabetic-big-case.routing';
import { AlphabeticBigCaseService } from './alphabetic-big-case.service';
import { GameService } from './../game.service';
@NgModule({
  imports: [
    CommonModule, AlphabeticBigCaseRoutingModule
  ],
  declarations: [AlphabeticBigCaseComponent],
  providers:[GameService,AlphabeticBigCaseService]
})
export class AlphabeticBigCaseModule { }
