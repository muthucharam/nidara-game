import * as Phaser from 'phaser';

export module BootModule{

    export class BootState extends Phaser.State{
        game: Phaser.Game;

        
        private resData;
        constructor(private resDataFromServer:Object){
          super(resDataFromServer);
         this.resData = resDataFromServer;
        }
        init() {      
      
        this.game.stage.backgroundColor = '#fff';
        }

  
        preload(){
      
         // this.game.load.image('nidara-logo',"assets/schools/dashboard/logo.jpg");
          let loading = this.game.load.image('nidara-preload',"assets/schools/games/tina-thinking.png");
    
         
    
        
        }
        create(){
         
         
          this.game.add.image(this.game.world.centerX,this.game.world.centerY- 100,'nidara-logo');
        // let tina = this.game.add.image(this.game.world.centerX - 100,this.game.world.centerY- 100,'tina-stand');
         console.log("create",this.game.world.centerX ,this.game.world.centerY );
          // this.game.load.image("tina","assets/games/alphabetic-a/tina-jump.png");
          // this.game.load.image('tina-stand','assets/games/alphabetic-a/tina-stand.png');
          // this.game.load.start();
        // tina.scale.setTo(0.5 ,0.5);
           //	You can listen for each of these events from Phaser.Loader
    
      
           this.game.state.start('PreloadState')
        } 
       
    
      }
}