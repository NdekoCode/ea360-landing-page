import { Component } from '@angular/core';
import { DATA_TESTIMONIALS } from 'src/app/libs/constants/data';
import { PARTNER } from './../../libs/constants/data';
import { Partner, Testimonial } from './../../libs/constants/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  testimonials: Testimonial[] = DATA_TESTIMONIALS;
  partners: Partner[] = PARTNER;
}
