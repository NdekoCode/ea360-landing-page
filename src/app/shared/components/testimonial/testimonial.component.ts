import { Component, Input } from '@angular/core';
import { Testimonial } from './../../../libs/constants/types';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  @Input() testimonial!: Testimonial;
}
