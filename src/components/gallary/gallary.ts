import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBannerComponent } from '../top-banner/top-banner.component';
import { DataSharing } from '../../services/data-sharing';

@Component({
  selector: 'app-gallary',
  imports: [CommonModule, TopBannerComponent],
  templateUrl: './gallary.html',
  styleUrl: './gallary.css',
})
export class Gallary {
  constructor(private bannerService: DataSharing) {}

  ngOnInit() {
    this.bannerService.setBannerTitle('About Us');
  }
  galleryImages = [
    {
      before: 'assets/before-after/10004.jpeg',
      after: 'assets/before-after/10005.jpeg',
    },
    {
      before: 'assets/before-after/10006.jpeg',
      after: 'assets/before-after/10007.jpeg',
    },
    // { before: 'assets/before-after/10008.jpeg', after: 'assets/before-after/10009.jpeg' },
    {
      before: 'assets/before-after/10010.jpeg',
      after: 'assets/before-after/10011.jpeg',
    },
    {
      before: 'assets/before-after/10012.jpeg',
      after: 'assets/before-after/10013.jpeg',
    },
    {
      before: 'assets/before-after/10014.jpeg',
      after: 'assets/before-after/10015.jpeg',
    },
    {
      before: 'assets/before-after/10016.jpeg',
      after: 'assets/before-after/10017.jpeg',
    },
    {
      before: 'assets/before-after/10018.jpeg',
      after: 'assets/before-after/10019.jpeg',
    },
    {
      before: 'assets/before-after/10020.jpg',
      after: 'assets/before-after/10021.jpg',
    },
    {
      before: 'assets/before-after/10022.jpg',
      after: 'assets/before-after/10023.jpg',
    },
    {
      before: 'assets/before-after/10024.jpg',
      after: 'assets/before-after/10025.jpg',
    },
    {
      before: 'assets/before-after/10026.jpg',
      after: 'assets/before-after/10027.jpg',
    },
    {
      before: 'assets/before-after/10028.jpg',
      after: 'assets/before-after/10029.jpg',
    },
    {
      before: 'assets/before-after/10032.jpg',
      after: 'assets/before-after/10033.jpg',
    },
    {
      before: 'assets/before-after/10034.jpg',
      after: 'assets/before-after/10035.jpg',
    },
    {
      before: 'assets/before-after/10036.jpg',
      after: 'assets/before-after/10037.jpg',
    },
    {
      before: 'assets/before-after/10038.jpg',
      after: 'assets/before-after/10039.jpg',
    },
    {
      before: 'assets/before-after/10040.jpg',
      after: 'assets/before-after/10041.jpg',
    },
    {
      before: 'assets/before-after/10042.jpg',
      after: 'assets/before-after/10043.jpg',
    },
    {
      before: 'assets/before-after/10044.jpg',
      after: 'assets/before-after/10045.jpg',
    },
    {
      before: 'assets/before-after/10046.jpg',
      after: 'assets/before-after/10047.jpg',
    },
    {
      before: 'assets/before-after/10048.jpg',
      after: 'assets/before-after/10049.jpg',
    },
    {
      before: 'assets/before-after/10050.jpg',
      after: 'assets/before-after/10051.jpg',
    },
    {
      before: 'assets/before-after/10052.jpg',
      after: 'assets/before-after/10053.jpg',
    },
    {
      before: 'assets/before-after/10054.jpg',
      after: 'assets/before-after/10055.jpg',
    },
    {
      before: 'assets/before-after/10056.jpg',
      after: 'assets/before-after/10057.jpg',
    },
    {
      before: 'assets/before-after/10058.jpg',
      after: 'assets/before-after/10059.jpg',
    },
    {
      before: 'assets/before-after/10060.jpg',
      after: 'assets/before-after/10061.jpg',
    },
    {
      before: 'assets/before-after/10062.jpg',
      after: 'assets/before-after/10063.jpg',
    },
    {
      before: 'assets/before-after/10064.jpg',
      after: 'assets/before-after/10065.jpg',
    },
    {
      before: 'assets/before-after/10066.jpg',
      after: 'assets/before-after/10067.jpg',
    },
    {
      before: 'assets/before-after/10068.jpg',
      after: 'assets/before-after/10069.jpg',
    },
    {
      before: 'assets/before-after/10070.jpg',
      after: 'assets/before-after/10071.jpg',
    },
    {
      before: 'assets/before-after/10072.jpg',
      after: 'assets/before-after/10073.jpg',
    },
    {
      before: 'assets/before-after/10074.jpg',
      after: 'assets/before-after/10075.jpg',
    },
    {
      before: 'assets/before-after/10076.jpg',
      after: 'assets/before-after/10077.jpg',
    },
    {
      before: 'assets/before-after/10078.jpg',
      after: 'assets/before-after/10079.jpg',
    },
    {
      before: 'assets/before-after/10080.jpg',
      after: 'assets/before-after/10081.jpg',
    },
    {
      before: 'assets/before-after/10082.jpg',
      after: 'assets/before-after/10083.jpg',
    },
    {
      before: 'assets/before-after/10084.jpg',
      after: 'assets/before-after/10085.jpg',
    },
    {
      before: 'assets/before-after/10086.jpg',
      after: 'assets/before-after/10087.jpg',
    },
    {
      before: 'assets/before-after/10088.jpg',
      after: 'assets/before-after/10089.jpg',
    },
    {
      before: 'assets/before-after/10090.jpg',
      after: 'assets/before-after/10091.jpg',
    },
    {
      before: 'assets/before-after/10092.jpg',
      after: 'assets/before-after/10093.jpg',
    },
    {
      before: 'assets/before-after/10094.jpg',
      after: 'assets/before-after/10095.jpg',
    },
    {
      before: 'assets/before-after/10096.jpg',
      after: 'assets/before-after/10097.jpg',
    },
    {
      before: 'assets/before-after/10098.jpg',
      after: 'assets/before-after/10099.jpg',
    },
    {
      before: 'assets/before-after/10100.jpg',
      after: 'assets/before-after/10101.jpg',
    },
    {
      before: 'assets/before-after/10102.jpg',
      after: 'assets/before-after/10103.jpg',
    },
    {
      before: 'assets/before-after/10104.jpg',
      after: 'assets/before-after/10105.jpg',
    },
    {
      before: 'assets/before-after/10106.jpg',
      after: 'assets/before-after/10107.jpg',
    },
    {
      before: 'assets/before-after/10108.jpg',
      after: 'assets/before-after/10109.jpg',
    },
    {
      before: 'assets/before-after/10110.jpg',
      after: 'assets/before-after/10111.jpg',
    },
    {
      before: 'assets/before-after/10112.jpg',
      after: 'assets/before-after/10113.jpg',
    },
    {
      before: 'assets/before-after/10114.jpg',
      after: 'assets/before-after/10115.jpg',
    },
    {
      before: 'assets/before-after/10116.jpg',
      after: 'assets/before-after/10117.jpg',
    },
    {
      before: 'assets/before-after/10118.jpg',
      after: 'assets/before-after/10119.jpg',
    },
    {
      before: 'assets/before-after/10120.jpg',
      after: 'assets/before-after/10121.jpg',
    },
    {
      before: 'assets/before-after/10122.jpg',
      after: 'assets/before-after/10123.jpg',
    },
    {
      before: 'assets/before-after/10124.jpg',
      after: 'assets/before-after/10125.jpg',
    },
    {
      before: 'assets/before-after/10126.jpg',
      after: 'assets/before-after/10127.jpg',
    },
    {
      before: 'assets/before-after/10128.jpg',
      after: 'assets/before-after/10129.jpg',
    },
    {
      before: 'assets/before-after/10130.jpg',
      after: 'assets/before-after/10131.jpg',
    },
    {
      before: 'assets/before-after/10132.jpg',
      after: 'assets/before-after/10133.jpg',
    },
    {
      before: 'assets/before-after/10134.jpg',
      after: 'assets/before-after/10135.jpg',
    },
    {
      before: 'assets/before-after/10136.jpeg',
      after: 'assets/before-after/10137.jpeg',
    },
    {
      before: 'assets/before-after/10138.jpeg',
      after: 'assets/before-after/10139.jpeg',
    },
    {
      before: 'assets/before-after/10140.jpeg',
      after: 'assets/before-after/10141.jpeg',
    },
    {
      before: 'assets/before-after/10142.jpeg',
      after: 'assets/before-after/10143.jpeg',
    },
    {
      before: 'assets/before-after/10144.jpeg',
      after: 'assets/before-after/10145.jpeg',
    },
    {
      before: 'assets/before-after/10146.jpeg',
      after: 'assets/before-after/10146.jpeg',
    },
    {
      before: 'assets/before-after/10147.jpeg',
      after: 'assets/before-after/10148.jpeg',
    },
    {
      before: 'assets/before-after/10149.jpeg',
      after: 'assets/before-after/10150.jpeg',
    },
    {
      before: 'assets/before-after/10151.jpeg',
      after: 'assets/before-after/10152.jpeg',
    },
    {
      before: 'assets/before-after/10153.jpeg',
      after: 'assets/before-after/10154.jpeg',
    },
    {
      before: 'assets/before-after/10155.jpeg',
      after: 'assets/before-after/10156.jpeg',
    },
  ];
}
