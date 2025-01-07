import { Component, signal } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signup',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  errorMessage = signal('');
  hide = signal(true);

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


}

