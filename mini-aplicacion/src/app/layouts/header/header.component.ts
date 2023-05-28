import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLogged: Observable<boolean> = this.authService.userLogged$;
  username: Observable<string> = this.authService.userName$;

  constructor(private authService: AuthService) {}
  logout(): void {
    this.authService.logout();
  }
}
