import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { LikeElementComponent } from './like-element/like-element.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, LikeElementComponent],
  template: `
  <app-like-element 
    [likedNumber]=likedNumber 
    [dislikedNumber]=dislikedNumber>
  </app-like-element>

  `,
})
export class App {
  name = 'Angular';
  likedNumber = 100;
  dislikedNumber = 25; 
}

bootstrapApplication(App);
