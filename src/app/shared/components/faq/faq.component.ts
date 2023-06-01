import { Component, OnInit } from '@angular/core';
import { FAQ } from './../../../libs/constants/data';
import { faq } from './../../../libs/constants/types';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
})
export class FaqComponent implements OnInit {
  FAQ!: faq[];
  ngOnInit(): void {
    this.FAQ = FAQ;
  }
}
