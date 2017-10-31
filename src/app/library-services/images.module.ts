import * as Phaser from 'phaser';

export module ImagesModule{

    export class StaticImages {
       // public game: Phaser.Game;
       game; 
        constructor(game){ this.game = game; }


        preloadStaticImages(identity,url){
            
            this.game.load.image(identity, url);
        }
       


        createStaticImages(width,height,identity){
           return this.game.add.image(width, height,identity);
            
        }
        


        
    }
    export class MonsterImages {
        game; 
        constructor(game){ this.game = game; }

        preloadMonsterImages(identity,url){
            
            this.game.load.image(identity, url);
        }
        createMonsterImages(width,height,identity){
            return this.game.add.image(width, height,identity);
             
         }
    }


}