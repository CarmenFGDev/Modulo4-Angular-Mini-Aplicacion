import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  message: string = 'An unspecified error has occurred';
  icon: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: {
      message: string;
    },
    private dialogRef: MatDialogRef<AlertComponent>
  ) {
   if (data?.message) this.message = data.message;
  } 
  closeDialog() {
    this.dialogRef.close();
  }

}
