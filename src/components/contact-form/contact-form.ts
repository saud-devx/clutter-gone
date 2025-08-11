import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,
    RecaptchaModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {

contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
     this.contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    captcha: [''] ,
  });
    
  }

  onCaptchaResolved(token: any) {
this.contactForm.patchValue({ captcha: token });  }

 submitForm() {
  if (this.contactForm.valid) {
    // Get reCAPTCHA token
    const token = (window as any).grecaptcha.getResponse();

    if (!token) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    const formData = {
      ...this.contactForm.value,
      captcha: token // pass the token to backend
    };

    this.http.post('/submit.php', formData).subscribe({
      next: (response) => {
        console.log('Server response:', response);
        this.contactForm.reset();
        (window as any).grecaptcha.reset(); // reset captcha for next submission
      },
      error: (err) => {
        console.error('Error submitting form:', err);
      }
    });

  } else {
    this.contactForm.markAllAsTouched();
  }
}

}
