import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CardComponent } from './shared/components/card/card.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TestimonialComponent } from './shared/components/testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    CardComponent,
    TestimonialComponent,
    StarRatingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
