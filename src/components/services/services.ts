import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBannerComponent } from "../top-banner/top-banner.component";

@Component({
  selector: 'app-services',
  imports: [CommonModule, TopBannerComponent],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

 services = [
    { title: 'GENERAL DIY SERVICES', image: '../../assets/services-images/1.png' },
    { title: 'HOME MOVE SERVICE', image: '../../assets/services-images/2.png' },
    { title: 'PAINTING AND DECORATING SERVICES', image: '../../assets/services-images/3.png' },
    { title: 'END OF TENANCY CLEARANCES', image: '../../assets/services-images/4.png' },
    { title: 'HOME/PROBATE/OFFICE CLEARANCES', image: '../../assets/services-images/5.png' },
    { title: 'RENOVATIONS', image: '../../assets/services-images/6.png' }
  ];
  
}
