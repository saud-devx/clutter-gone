import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataSharing } from '../../services/data-sharing';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-testimonials',
 imports: [  CommonModule],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials {
    constructor( private bannerService: DataSharing) {}

  ngOnInit() {
    this.bannerService.setBannerTitle('Testimonials');
  }
}

