import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isActive: boolean = false;
  isShown: boolean = window.innerWidth < 992;
  toggleActive() {
    if (window.innerWidth < 992) {
      this.isActive = !this.isActive;
    }
  }
}
