import * as Phaser from 'phaser';
import { ButtonsModule } from './../library-services/buttons.module';
import { ImagesModule } from './../library-services/images.module';
import { AudiosModule } from './../library-services/audios.module';
import { LoggerService } from './../log4ts-services/logger.service';
export module HomeModule{

    export class HomeState extends Phaser.State {
        game: Phaser.Game;
        public resData;
        constructor(resDataFromServer: Object, private logger: LoggerService) {
          super(resDataFromServer);
          this.resData = resDataFromServer;
        }
    
        init(){
          this.game.stage.backgroundColor = '#fff';
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
                        * Tina Stand Images and static images load
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
    
    
                this.logger.info('HomeModule.HomeState: ALPHABETIC_BIG_SMALL_CASE.forEach()', SLIDERSTATE);
              }
    
            } catch (error) {
    
              this.logger.invokeConsoleMethod('error', 'HomeModule.HomeState: ALPHABETIC_BIG_SMALL_CASE.forEach()');
            }
    
          });
    
    
    
    
        }
        create() { }
    
        update() { }
      }
}