import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { HeroComponent } from './hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
