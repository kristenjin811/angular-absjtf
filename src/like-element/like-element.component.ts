import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-element',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './like-element.component.html',
  styleUrls: ['./like-element.component.css']
})
export class LikeElementComponent {
  @Input() likedNumber!: number;
  @Input() dislikedNumber!: number;

  state: 1 | 0 | -1 = 0; 

  addOneLike() {
    if (this.state === 1) {
      this.state = 0
    } else {
      this.state = 1 
    }
  }
  
  addOneDisLike() {
    if (this.state === -1) {
      this.state = 0 
    } else {
      this.state = -1
    }
  }
}