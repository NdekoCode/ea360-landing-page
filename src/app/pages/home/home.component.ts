import { Component } from '@angular/core';
import { DATA_TESTIMONIALS } from 'src/app/libs/constants/data';
import { Testimonial } from './../../libs/constants/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  testimonials: Testimonial[] = DATA_TESTIMONIALS;
}
