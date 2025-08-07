import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  imports: [CommonModule],
  templateUrl: './gallary.html',
  styleUrl: './gallary.css'
})
export class Gallary {

  galleryImages = [
    {
      before: 'assets/carousel.jpg',
      after: 'assets/carousel.jpg'
    },
    {
      before: 'assets/carousel.jpg',
      after: 'assets/carousel.jpg'
    },
    {
      before: 'assets/carousel.jpg',
      after: 'assets/carousel.jpg'
    },
    {
      before: 'assets/carousel.jpg',
      after: 'assets/carousel.jpg'
    },
     {
      before: 'assets/carousel.jpg',
      after: 'assets/carousel.jpg'
    }, {
      before: 'assets/carousel.jpg',
      after: 'assets/carousel.jpg'
    }, {
      before: 'assets/carousel.jpg',
      after: 'assets/carousel.jpg'
    },
    // Add more pairs as needed
  ];
}
