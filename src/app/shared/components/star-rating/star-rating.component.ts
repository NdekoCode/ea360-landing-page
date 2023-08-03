import { Component, Input, OnChanges } from '@angular/core';
@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: string | number = 5;
  ratingClone!: number;
  voidItem!: number[];
  items!: number[];
  ngOnChanges(): void {
    this.ratingClone = parseInt(this.rating as string);
    this.items = new Array(this.ratingClone);
    this.voidItem = new Array(5);
  }
}
