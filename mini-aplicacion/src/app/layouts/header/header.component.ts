import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogged= false;
  constructor(private authService: AuthService, private router: Router){
  }
  ngOnInit(): void {
    this.isLogged= this.authService.isLogged();
    const defaultPage = this.isLogged ? '/dashboard' : '';
    this.router.navigate([defaultPage]);
  }

}
