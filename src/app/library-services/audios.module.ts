import * as Phaser from 'phaser';

export module AudiosModule{

    export class IntroductionAudio {
      
      public game; 
        constructor(game){ this.game = game; }


        preloadIntroductionAudio(identity,url){
            
            this.game.load.audio(identity,url);
        }

        createIntroductionAudio(identity,allowMultiple = false){
            let play = this.game.add.audio(identity);
            play.allowMultiple = allowMultiple;
            console.log(allowMultiple);
            return play;
        }



        
    }


}