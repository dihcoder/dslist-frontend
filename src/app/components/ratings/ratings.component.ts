import { Component, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-ratings',
  imports: [],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss'
})
export class RatingsComponent {

  @Input() score: number = 0;
  stars: string[] = [];

  ngOnChanges() {
    this.stars = this.generateStars(this.score);
  }

  private generateStars(score: number): string[] {
    let stars: string[] = [];
    
    for (let i = 1; i <= 5; i++) {
      if (score >= i) {
        stars.push('star-full');
      } else if (score >= i - 0.5) {
        stars.push('star-half');
      } else {
        stars.push('star-empty');
      }
    }
    return stars;
  }
}
