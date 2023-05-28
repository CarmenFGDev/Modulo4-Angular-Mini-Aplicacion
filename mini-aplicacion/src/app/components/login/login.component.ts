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
  spinner: boolean = false;
  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  public login() {
    this.spinner = true;
    this.authService
      .login(this.userNameFormControl.value!, this.passwordFormControl.value!)
      .subscribe((isLogged) => {
        this.spinner = false;
        if (isLogged) {
          this.router.navigate(['/dashboard']);
        } else {
          this.openAlertDialog();
        }
      });
  }

  public openAlertDialog() {
    this.dialog.open(AlertComponent, {
      data: {
        message: 'Try again..',
      },
    });
  }
}
