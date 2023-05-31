import { Component } from '@angular/core';
import { BLOG_ARTICLES, DATA_TESTIMONIALS } from 'src/app/libs/constants/data';
import { PARTNER } from './../../libs/constants/data';
import { Article, Partner, Testimonial } from './../../libs/constants/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  testimonials: Testimonial[] = DATA_TESTIMONIALS;
  partners: Partner[] = PARTNER;
  articles: Article[] = BLOG_ARTICLES;
}
