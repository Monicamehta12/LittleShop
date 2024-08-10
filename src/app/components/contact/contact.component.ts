import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]), // Example for a 10-digit phone number
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
    this.contactForm.reset();
  }
}
