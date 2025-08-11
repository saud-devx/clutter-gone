import { Component } from '@angular/core';
import { LayoutComponent } from "../components/layout/layout.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ LayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  protected title = 'clutter-b-gone-clone';
  pageTitle: string = '';

  constructor( private router: Router){ }

}
