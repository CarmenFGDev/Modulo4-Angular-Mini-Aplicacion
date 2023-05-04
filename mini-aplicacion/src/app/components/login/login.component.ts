import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/layouts/alert/alert.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  public login() {
    const isLogged = this.authService.login(
      this.userNameFormControl.value!,
      this.passwordFormControl.value!
    );
    if (isLogged) {
      this.router.navigate(['/dashboard']);
      localStorage.setItem('username',this.userNameFormControl.value!);
    } else {
      this.openAlertDialog();
      localStorage.setItem('username','');
    }
  }

  public openAlertDialog() {
    this.dialog.open(AlertComponent, {
      data: {
        message: 'Try again..',
      },
    });
  }
}
