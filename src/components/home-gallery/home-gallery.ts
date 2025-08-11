import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-gallery',
  imports: [CommonModule,RouterLink],
  templateUrl: './home-gallery.html',
  styleUrl: './home-gallery.css'
})
export class HomeGallery {

galleryImages = [
  { src: '../../assets/before-after/10004.jpeg', label: 'BEFORE' },
  { src: '../../assets/before-after/10005.jpeg', label: 'AFTER' },
  { src: '../../assets/before-after/10006.jpeg', label: 'BEFORE' },
  { src: '../../assets/before-after/10007.jpeg', label: 'AFTER' },
  { src: '../../assets/before-after/10009.jpeg', label: 'BEFORE' },
  { src: '../../assets/before-after/10010.jpeg', label: 'AFTER' },
  { src: '../../assets/before-after/10011.jpeg', label: 'BEFORE' },
  { src: '../../assets/before-after/10012.jpeg', label: 'AFTER' },
];


}
