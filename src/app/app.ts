import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../components/header/header";
import { HomeIntro } from "../components/home-intro/home-intro";
import { HomeServicesSummary } from "../components/home-services-summary/home-services-summary";
import { HomeGallery } from "../components/home-gallery/home-gallery";
import { ContactForm } from "../components/contact-form/contact-form";
import { HomeHero } from "../components/home-hero/home-hero";
import { FooterComponent } from "../components/footer/footer.component";
  declare var bootstrap: any;
@Component({
  selector: 'app-root',
  imports: [Header, HomeIntro, HomeServicesSummary, HomeGallery, ContactForm, HomeHero, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  protected title = 'clutter-b-gone-clone';

}
