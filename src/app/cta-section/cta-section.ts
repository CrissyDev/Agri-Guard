import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule,FooterComponent],
  templateUrl: './cta-section.html',
  styleUrls: ['./cta-section.css']
})
export class CtaSectionComponent {}
