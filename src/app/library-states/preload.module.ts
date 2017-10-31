import * as Phaser from 'phaser';
import { LoggerService } from './../log4ts-services/logger.service';
import { ButtonsModule } from './../library-services/buttons.module';
import { AudiosModule } from './../library-services/audios.module';
import { ImagesModule } from './../library-services/images.module';
export module PreloadModule {
    export class PreloadState extends Phaser.State {
        public game: Phaser.Game;
        public resData;
        constructor(resDataFromServer: Object, private logger: LoggerService) {
            super(resDataFromServer);
            this.resData = resDataFromServer;
        }

        init() { 


            this.game.stage.backgroundColor = '#fff';
        }
        preload() {

            // To show the loading screen Objects
            let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'nidara-logo');
            logo.anchor.setTo(0.5);
            this.game.add.text(this.game.world.centerX - 40, this.game.world.centerY + 220, 'Loading....', {fill: '#000'});
            let preloadBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 50, 'nidara-preload');
            preloadBar.anchor.setTo(0.5);

            this.game.load.setPreloadSprite(preloadBar); // predict the preloadBar



            // initialize modules
            let SpriteButtonPreload = new ButtonsModule.SpirteButton(this.game);
            let StaticImagePreload = new ImagesModule.StaticImages(this.game);
            let MonsterImagePreload = new ImagesModule.MonsterImages(this.game);
            
            let IntroAudioPreload = new AudiosModule.IntroductionAudio(this.game);

            // load resData
            this.resData.NIDARAGAMEDATA.forEach(SLIDERSTATE => {
                try {
                 //   if (SLIDERSTATE.SLIDERSTATE == "HomeState") {
                    SLIDERSTATE.CHARACTERS.forEach(CHARACTERS => {
                        if (CHARACTERS.TYPE === "static") {

                            CHARACTERS.IDENTITYURLWITHPOSITION.forEach(IDENTITYURLWITHPOSITION => {
                                 // load assets from rest service to module common methods
                                StaticImagePreload.preloadStaticImages(
                                    IDENTITYURLWITHPOSITION.identity,
                                    IDENTITYURLWITHPOSITION.url)
                            });
                           
                        }  else if (CHARACTERS.TYPE === "monster") {
                            
                                                        CHARACTERS.IDENTITYURLWITHPOSITION.forEach(IDENTITYURLWITHPOSITION => {
                                                             // load assets from rest service to module common methods
                                                            StaticImagePreload.preloadStaticImages(
                                                                IDENTITYURLWITHPOSITION.identity,
                                                                IDENTITYURLWITHPOSITION.url)
                                                        });
                                                    }else if (CHARACTERS.TYPE === "grayaudiowithsprite") {

                            // load assets from rest service to module common methods
                            SpriteButtonPreload.preloadSpritePlayGrayButton(
                                CHARACTERS.IDENTITYURLWITHPOSITION['gray'].identity,
                                CHARACTERS.IDENTITYURLWITHPOSITION['gray'].url)
                            SpriteButtonPreload.preloadSpritePlayButton(
                                CHARACTERS.IDENTITYURLWITHPOSITION['sprite'].identity,
                                CHARACTERS.IDENTITYURLWITHPOSITION['sprite'].url)
                            IntroAudioPreload.preloadIntroductionAudio(
                                CHARACTERS.IDENTITYURLWITHPOSITION['intro'].identity,
                                CHARACTERS.IDENTITYURLWITHPOSITION['intro'].url);
                            IntroAudioPreload.preloadIntroductionAudio(
                                CHARACTERS.IDENTITYURLWITHPOSITION['hover'].identity,
                                CHARACTERS.IDENTITYURLWITHPOSITION['hover'].url);

                        }


                    });

                    this.logger.info('PreloadModule.HomeState: .forEach()', SLIDERSTATE);
             //   } // for single game only preloading
                } catch (error) {
                    this.logger.invokeConsoleMethod('error', 'PreloadModule.HomeState: ALPHABETIC_BIG_SMALL_CASE.forEach()');

                }
            });
        }

        create() { // create 

            setTimeout(()=> {
                this.game.state.start('HomeState');
            }, 2000);
           

        }
    }
}