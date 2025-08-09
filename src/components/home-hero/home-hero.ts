import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home-hero',
  imports: [CarouselModule],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css'
})
export class HomeHero {
products = [
    { name: 'Item 1', image: 'assets/carousel-images/1.jpg' },
    { name: 'Item 2', image: 'assets/carousel-images/2.jpeg' },
    { name: 'Item 2', image: 'assets/carousel-images/3.jpg' },
  ];

}
