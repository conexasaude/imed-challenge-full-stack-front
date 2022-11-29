import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imed';
  constructor(
    private router: Router,
    public authService: AuthService
    ) { }
    
  ngOnInit(): void {
  }
}
