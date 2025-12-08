import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from '../features/features';  


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FeaturesComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {}
