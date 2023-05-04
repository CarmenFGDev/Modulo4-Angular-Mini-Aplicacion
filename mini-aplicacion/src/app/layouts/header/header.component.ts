import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogged: Observable<boolean> = this.authService.isLogged();
  constructor(private authService: AuthService, private router: Router){
  }
  ngOnInit(): void {
    const defaultPage = this.isLogged ? '/dashboard' : '';
    this.router.navigate([defaultPage]);
  }

}
