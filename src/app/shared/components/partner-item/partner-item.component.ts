import { Component, Input } from '@angular/core';
import { Partner } from './../../../libs/constants/types';

@Component({
  selector: 'app-partner-item',
  templateUrl: './partner-item.component.html',
  styleUrls: ['./partner-item.component.scss'],
})
export class PartnerItemComponent {
  @Input() partner!: Partner;
}
