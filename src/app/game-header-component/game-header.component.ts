import { Component, OnInit } from '@angular/core';
import { GAMEHEADERAUDIO } from './../game.config';
@Component({
  selector: 'nidara-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.css']
})
export class GameHeaderComponent implements OnInit {

  private audioHoverPlayback = new Audio(); // onHoverPlayback Object
  private audioClickPlayback = new Audio(); // onClickPlayback Object
  constructor() { }

  ngOnChanges() { }

  ngOnInit() { }

  ngDoCheck() { }

  ngAfterContentInit() { }

  ngAfterContentChecked() { }

  ngAfterViewInit() { }

  ngAfterViewChecked() { }

  ngOnDestroy() { }


  /**
   * volumeButton onClick method
   */
  volumeClick() {
    //  this.game.sound.stopAll();
    //  this.game.state.start(this.game.state.current);
  }

  /**
   * exitButton onClick method
   */
  exitClick() {
    //  this.game.sound.stopAll();
    // todo: when audio click to enable the onstop method
    this.audioClickPlayback.pause();
    this.audioHoverPlayback.pause();
    //  this.router.navigate(['/child-dashboard']);
    // this.game.destroy();
  }

  /**
   * exitHover onHover method
   */
  exitHover() {


    this.audioHoverPlayback.src = GAMEHEADERAUDIO.EXITBUTTON.HOVER;
    this.audioHoverPlayback.load();
    this.audioHoverPlayback.play();

    this.audioHoverPlayback.controls;
  }

  /**
   * volumeHover onHover method
   */
  volumeHover() {
    this.audioClickPlayback.pause();
    this.audioHoverPlayback.pause();
    this.audioHoverPlayback.src = GAMEHEADERAUDIO.VOLUMEPLAYAGAIN;
    this.audioHoverPlayback.load();
    this.audioHoverPlayback.play();
  }

  /**
   * volumeOut onMouseOut method
   */
  volumeOut() {

    this.audioHoverPlayback.pause();
  }

  /**
   * exitOut onMouseOut method
   */
  exitOut() {
    this.audioClickPlayback.pause();
    this.audioHoverPlayback.pause();
  }

  /**
   * LogoOnClick method
   */
  logoClick() { }
}
