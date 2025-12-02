import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
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