import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { GameHeaderComponent } from './game-header-component/game-header.component'
import { GameComponent } from './game.component';
import { AlphabeticBigCaseComponent } from './alphabetic-big-case/alphabetic-big-case.component'
const routes: Routes = [{
  path: '',
  redirectTo: 'alphabetic',
  pathMatch: 'full',
},
  {
    path: '',
    component: GameHeaderComponent,
    data: {
      title: 'Alphabetic Big Case'
    }, children: [
      {
        path: "alphabetic",
    
        loadChildren: './alphabetic-big-case/alphabetic-big-case.module#AlphabeticBigCaseModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // use forRoot in seprate module
  exports: [RouterModule]
})
export class GameRoutingModule {}