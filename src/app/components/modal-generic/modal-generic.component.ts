import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal-generic',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './modal-generic.component.html',
  styleUrl: './modal-generic.component.css'
})
export class ModalGenericComponent  {
  constructor(
    private readonly dialogRef: MatDialogRef<ModalGenericComponent>,
  ){}
  
  closeDialog(){
    this.dialogRef.close();
  }
}
