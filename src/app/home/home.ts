import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeaturesComponent } from '../features/features';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  standalone: true, 
  imports:[CommonModule, FeaturesComponent, RouterModule],
  styleUrls: ['./home.css']
})

export class HomeComponent {
  router: any;
  
  onLogin() {
    alert('Login functionality would go here!');
     this.router.navigate(['/login']);
  }

  onSignUp() {
    alert('Sign Up functionality would go here!');
    this.router.navigate(['/signup']);
  }
}