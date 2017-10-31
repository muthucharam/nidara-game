import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { GAMEHEADERAUDIO } from './../game.config';
import { PreloadModule } from './../library-states/preload.module';
import { BootModule } from './../library-states/boot.module';
import { AlphabeticBigCaseService } from './alphabetic-big-case.service';
import { HomeModule } from './../library-states/home.module';
import { ButtonsModule } from './../library-services/buttons.module';
import { ImagesModule } from './../library-services/images.module';
import { AudiosModule } from './../library-services/audios.module';
import { LoggerService } from './../log4ts-services/logger.service';
@Component({
  selector: 'app-alphabetic-big-case',
  templateUrl: './alphabetic-big-case.component.html',
  styleUrls: ['./alphabetic-big-case.component.css']
})
export class AlphabeticBigCaseComponent implements OnInit {

  public game: Phaser.Game;
  constructor(private alphabeticService: AlphabeticBigCaseService, private logger: LoggerService) {


  }

  ngOnInit() {

    this.alphabeticService.getData("assets/testData.json").subscribe(response => {

      try {
    

        this.game = new Phaser.Game("87%", "92%", Phaser.AUTO, 'gamecontainer');
        let bootState = new BootModule.BootState(response);
        let preloadState = new PreloadModule.PreloadState(response, this.logger);
        let homeState = new HomeModule.HomeState(response, this.logger);
        let animalState = new GamePhaserModule.AnimalState(response, this.logger);
        let shootingState = new GamePhaserModule.ShootingWithText(response, this.logger);


        this.game.state.add("BootState", bootState, false); // BootState 
        this.game.state.add("PreloadState", preloadState, false);
        this.game.state.add("HomeState", homeState, false); 
        this.game.state.add("AnimalState", animalState, false); 
        this.game.state.add("ShootingState", shootingState, false);
        this.game.state.start("BootState", true);





        this.logger.info('AlphabeticBigCaseComponent: alphabeticService.getData()', response);
      } catch (error) {
        this.logger.invokeConsoleMethod('error', 'AlphabeticBigCaseComponent: alphabeticService.getData()');
      }





    }, error => {
      console.assert(error, "JSON Error")
    })





  }

}


export module GamePhaserModule {

  export class AnimalState extends Phaser.State {
    game: Phaser.Game;
    public resData;
    constructor(resDataFromServer: Object, private logger: LoggerService) {
      super(resDataFromServer);
      this.resData = resDataFromServer;
    }

    preload() {
      // initialize modules
      let IntroAudioCreate = new AudiosModule.IntroductionAudio(this.game);
      let SpriteButtonCreate = new ButtonsModule.SpirteButton(this.game);
      let StaticImageCreate = new ImagesModule.StaticImages(this.game);
     
      


      // load resData
      this.resData.NIDARAGAMEDATA.forEach(SLIDERSTATE => {
        try {
          if (SLIDERSTATE.SLIDERSTATE == this['key']) {



            // get Characters

            SLIDERSTATE.CHARACTERS.forEach(CHARACTERS => {


              if (CHARACTERS.TYPE === "static") {


                CHARACTERS.IDENTITYURLWITHPOSITION.forEach(IDENTITYURLWITHPOSITION => {

                  /**
                    * Tina Stand Images 
                    * @params: width, height, identity
                    * no events
                    */
                  StaticImageCreate.createStaticImages(
                    IDENTITYURLWITHPOSITION.position[0],
                    IDENTITYURLWITHPOSITION.position[1],
                    IDENTITYURLWITHPOSITION.identity);
                });

              } else if (CHARACTERS.TYPE === "grayaudiowithsprite") {

                /** 
                 * Sprite Play Button Module Event
                 * (this.game.width - this.game.world.centerX)
                 * (this.game.height - this.game.world.centerY)
                 * @params: width, height, identity, state event
                 * if state false means end of slide
                 */
                let button = SpriteButtonCreate.createSpritePlayWithGrayIntroButton(700,
                  375, CHARACTERS.IDENTITYURLWITHPOSITION['sprite'].identity,
                  CHARACTERS.ROUTESTATE,
                  CHARACTERS.IDENTITYURLWITHPOSITION['gray'].identity,
                  CHARACTERS.IDENTITYURLWITHPOSITION['intro'].identity,
                  CHARACTERS.IDENTITYURLWITHPOSITION['hover'].identity);

              }
            });





            this.logger.info('GamePhaserModule.AnimalState: ALPHABETIC_BIG_SMALL_CASE.forEach()', SLIDERSTATE);
          }

        } catch (error) {

          this.logger.invokeConsoleMethod('error', 'GamePhaserModule.AnimalState: ALPHABETIC_BIG_SMALL_CASE.forEach()');
        }

      });
    }

    create() {

    }
  }

 

  export class ShootingWithText extends Phaser.State {
    game: Phaser.Game;
    public resData
    constructor(resDataFromServer: Object, private logger: LoggerService) {
      super(resDataFromServer);
      this.resData = resDataFromServer;
    }


    preload() {
      // initialize modules
      let IntroAudioCreate = new AudiosModule.IntroductionAudio(this.game);
      let SpriteButtonCreate = new ButtonsModule.SpirteButton(this.game);
      let StaticImageCreate = new ImagesModule.StaticImages(this.game);

      let MonsterImageCreate = new ImagesModule.MonsterImages(this.game);
      

      // load resData
      this.resData.NIDARAGAMEDATA.forEach(SLIDERSTATE => {
        try {
          if (SLIDERSTATE.SLIDERSTATE == this['key']) {

            let aliens;

            // get Characters

            SLIDERSTATE.CHARACTERS.forEach(CHARACTERS => {


              if (CHARACTERS.TYPE === "static") {


                CHARACTERS.IDENTITYURLWITHPOSITION.forEach(IDENTITYURLWITHPOSITION => {

                  this.game.physics.startSystem(Phaser.Physics.ARCADE);
                  aliens = this.game.add.group();
                  aliens.enableBody = true;
                  var positions = [{ x: 350, y: 300 }, { x: 450, y: 250 }, { x: 550, y: 350 }, { x: 600, y: 120 }, { x: 650, y: 220 }];
                  for (var i = 0; i < 5; i++) {
    
                    var s = aliens.create(positions[i].x, positions[i].y, CHARACTERS.IDENTITYURLWITHPOSITION);
                    // s.name = 'alien' + s;
                    // s.body.collideWorldBounds = true;
                    //  s.body.bounce.setTo(0.8, 0.8);
                    // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
                    //  s.inputEnabled = true;
                    //  s.events.onInputDown.add(this.destroySprite, this);
    
                  }
                  
                  StaticImageCreate.createStaticImages(
                    IDENTITYURLWITHPOSITION.position[0],
                    IDENTITYURLWITHPOSITION.position[1],
                    IDENTITYURLWITHPOSITION.identity);
                });
                
            }else if (CHARACTERS.TYPE === "monster") {

              CHARACTERS.IDENTITYURLWITHPOSITION.forEach(IDENTITYURLWITHPOSITION => {
                this.game.physics.startSystem(Phaser.Physics.ARCADE);
                aliens = this.game.add.group();
                aliens.enableBody = true;
                var positions = [{ x: 350, y: 300 }, { x: 450, y: 250 }, { x: 550, y: 350 }, { x: 600, y: 120 }, { x: 650, y: 220 }];
                for (var i = 0; i < 5; i++) {
  
                  var s = aliens.create(positions[i].x, positions[i].y, CHARACTERS.IDENTITYURLWITHPOSITION);
                  // s.name = 'alien' + s;
                  // s.body.collideWorldBounds = true;
                  //  s.body.bounce.setTo(0.8, 0.8);
                  // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
                  //  s.inputEnabled = true;
                  //  s.events.onInputDown.add(this.destroySprite, this);
  
                }
                
                MonsterImageCreate.createMonsterImages(
                  IDENTITYURLWITHPOSITION.position[0],
                  IDENTITYURLWITHPOSITION.position[1],
                  IDENTITYURLWITHPOSITION.identity);
                //  this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);
              });
           } else if (CHARACTERS.TYPE === "grayaudiowithsprite") {

                /** 
                 * Sprite Play Button Module Event
                 * (this.game.width - this.game.world.centerX)
                 * (this.game.height - this.game.world.centerY)
                 * @params: width, height, identity, state event
                 * if state false means end of slide
                 */
                let button = SpriteButtonCreate.createSpritePlayWithGrayIntroButton(700,
                  375, CHARACTERS.IDENTITYURLWITHPOSITION['sprite'].identity,
                  CHARACTERS.ROUTESTATE,
                  CHARACTERS.IDENTITYURLWITHPOSITION['gray'].identity,
                  CHARACTERS.IDENTITYURLWITHPOSITION['intro'].identity,
                  CHARACTERS.IDENTITYURLWITHPOSITION['hover'].identity);

              }
            });





            this.logger.info('GamePhaserModule.ShootingState: ALPHABETIC_BIG_SMALL_CASE.forEach()', SLIDERSTATE);
          }

        } catch (error) {

          this.logger.invokeConsoleMethod('error', 'GamePhaserModule.ShootingState: ALPHABETIC_BIG_SMALL_CASE.forEach()');
        }

      });
    }

    create() {

    }

  }




}
