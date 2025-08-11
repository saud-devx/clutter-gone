import { Component } from '@angular/core';
import { TopBannerComponent } from '../top-banner/top-banner.component';
import { ActivatedRoute } from '@angular/router';
import { DataSharing } from '../../services/data-sharing';

@Component({
  selector: 'app-about',
  imports: [TopBannerComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  pageTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private bannerService: DataSharing
  ) {}

  ngOnInit() {
    this.bannerService.setBannerTitle('About Us');
  }
}
