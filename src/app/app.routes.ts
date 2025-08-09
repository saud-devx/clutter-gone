import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { About } from '../components/about/about';
import { Team } from '../components/team/team';
import { Pricing } from '../components/pricing/pricing';
import { Services } from '../components/services/services';
import { Gallary } from '../components/gallary/gallary';
import { Testimonials } from '../components/testimonials/testimonials';
import { Faq } from '../components/faq/faq';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'team', component: Team },
  { path: 'pricing', component: Pricing },
  { path: 'services', component: Services },
  { path: 'gallery', component: Gallary },
  { path: 'faqs', component: Faq },
  { path: 'sevices', component: Services },
  { path: 'testimonials', component: Testimonials },
  { path: '**', redirectTo: '' }
  ];
