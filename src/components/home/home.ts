import { Component } from '@angular/core';
import { HomeIntro } from '../home-intro/home-intro';
import { HomeServicesSummary } from '../home-services-summary/home-services-summary';
import { ContactForm } from '../contact-form/contact-form';
import { HomeGallery } from '../home-gallery/home-gallery';
import { HomeHero } from '../home-hero/home-hero';


@Component({
  selector: 'app-home',
  imports: [ HomeIntro, HomeServicesSummary, HomeGallery, ContactForm, HomeHero],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
