import * as Phaser from 'phaser';

import { AudiosModule } from './audios.module'

export module ButtonsModule {




    export class SpirteButton {

        public game;
        constructor(game) {

            this.game = game;
        }

        /**
         * Play gray Button
         * @param identity 
         * @param url 
         */
        preloadSpritePlayGrayButton(identity, url) {
            this.game.load.image(identity, url);
        }


        /**
         * preload the Sprite Button
         * @param identity 
         * @param url 
         */
        preloadSpritePlayButton(identity, url) {

            this.game.load.spritesheet(identity, url, 120, 105);
        }


        createSpritePlayGrayButton(width, height, identity) {
           return this.game.add.button(width, height, identity, () => {},this);
        }



        /**
         * create the Sprite Button
         * @param width  
         * @param height 
         * @param identity 
         * @param stateRoute 
         * @param hoveraudio
         */
        createSpritePlayWithGrayIntroButton(width, height, identity, stateRoute, grayidentity, introaudio, hoveraudio) {
            let audioPlay = new AudiosModule.IntroductionAudio(this.game);

            let grayButton = this.createSpritePlayGrayButton(width, height, grayidentity);
            let introPlay = audioPlay.createIntroductionAudio(introaudio).play();

            introPlay.onStop.add(() => {
                grayButton.destroy();
                let button = this.game.add.button(width, height, identity, () => {
                    if (stateRoute) {
                        this.game.state.start(stateRoute);
                        console.log("Next State")
                    }

                }, this, 1, 0);

                button.onInputOver.add(() => {
                    audioPlay.createIntroductionAudio(hoveraudio).play();


                }, this);

            }, this);



        }




    }


}