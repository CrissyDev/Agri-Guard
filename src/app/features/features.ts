import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from '../how-it-works/how-it-works'; 

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, HowItWorksComponent],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class FeaturesComponent {}
