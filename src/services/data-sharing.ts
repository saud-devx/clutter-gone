import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharing {

  private bannerTitleSubject = new BehaviorSubject<string>('');
  bannerTitle$ = this.bannerTitleSubject.asObservable();

  setBannerTitle(title: string) {
    this.bannerTitleSubject.next(title);
  }
}
