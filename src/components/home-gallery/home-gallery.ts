import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-gallery',
  imports: [CommonModule],
  templateUrl: './home-gallery.html',
  styleUrl: './home-gallery.css'
})
export class HomeGallery {

  galleryImages = [
  { before: 'assets/carousel.jpg', after: 'assets/carousel.jpg' },
  { before: 'assets/carousel.jpg', after: 'assets/carousel.jpg' },
  { before: 'assets/carousel.jpg', after: 'assets/carousel.jpg' },
  { before: 'assets/carousel.jpg', after: 'assets/carousel.jpg' },
  { before: 'assets/carousel.jpg', after: 'assets/carousel.jpg' },
  { before: 'assets/carousel.jpg', after: 'assets/carousel.jpg' },
  { before: 'assets/carousel.jpg', after: 'assets/carousel.jpg' },
  { before: 'assets/carousel.jpg', after: 'assets/carousel.jpg' },
];


}
