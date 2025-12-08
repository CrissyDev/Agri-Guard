import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaSectionComponent } from '../cta-section/cta-section';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, CtaSectionComponent],
  templateUrl: './how-it-works.html',
  styleUrls: ['./how-it-works.css']
})
export class HowItWorksComponent {}
