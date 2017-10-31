
import { environment } from './../environments/environment'
export const GAMEHEADERAUDIO = Object.freeze({
    
    VOLUMEDOWN: {
      HOVER: "assets/games/audio/tina-welcome-message.mp3",
      OUT: "",
      CLICK: "assets/games/audio/tina-welcome-message-tina-speaking.mp3"
    },
    EXITBUTTON: {
      HOVER: environment.s3GameURL + "/ds-2342499547/Hrz0XDRZyhwpoFz.mp3", 
      OUT: "",
      CLICK: "assets/games/audio/will-see-you-soon-goodbye.mp3"
    },
    VOLUMEPLAYAGAIN: environment.s3GameURL + "/ds-2342499547/hSlteKCakx0chLS.mp3",
    ONLOAD: "assets/games/audio/tina-welcome-message.mp3",
    PLAYHOVER: "assets/games/audio/play-hover.mp3",
    SLIDEHOVER: "/slide_audio.mp3",
    PERVIOUSSCREEN: "assets/games/dashboard/previous-screen.mp3",
    NEXTSCREEN: "assets/games/dashboard/next-screen.mp3"
  
  
  });


