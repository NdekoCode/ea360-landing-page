import { Component, Input } from '@angular/core';
import { Article } from './../../../libs/constants/types';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.scss'],
})
export class CardBlogComponent {
  @Input() article!: Article;
}
