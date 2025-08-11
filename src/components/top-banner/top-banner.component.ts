import { Component, Input, OnInit } from '@angular/core';
import { DataSharing } from '../../services/data-sharing';
import { debug } from 'console';

@Component({
  selector: 'app-top-banner',
  standalone: true,
  imports: [],
  templateUrl: './top-banner.component.html',
  styleUrl: './top-banner.component.css'
})
export class TopBannerComponent  implements OnInit {
  title = '';

  constructor(private bannerService: DataSharing) {}

  ngOnInit() {
    this.bannerService?.bannerTitle$?.subscribe(title => {
      this.title = title;
    });
  }
}
