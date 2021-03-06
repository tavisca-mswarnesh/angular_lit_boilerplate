import { Component, Input } from '@angular/core';

import '../lit-components/mood.js';
import '../lit-components/input'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private moods: Array<string> = ['awesome', 'formidable', 'great', 'terrifying', 'wonderful', 'astonishing', 'breathtaking'];
  private _mood: string;
  isChanged: boolean = false;

  constructor() {
    this.randomMood();
  }

  randomMood() {
    const index = Math.floor(Math.random()*this.moods.length);
    if (this.mood === this.moods[index]) {
      return this.randomMood();
    }
    this.mood = this.moods[index];
  }

  moodChanged() {
    this.isChanged = true;
    setTimeout(() => {
      this.isChanged = false;
    }, 1000);
  }

  public get mood():string {
    return this._mood;
  }

  public set mood(value:string) {
    if(this._mood !== value) {
      this._mood = value;
      this.moodChanged();
    }
  }
}
