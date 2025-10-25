import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../http.service';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  builder = inject(FormBuilder);
  httpService= inject(HttpService)
  contactForm = this.builder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  });

  onSave(){
    console.log("contact button clicked",this.contactForm.value);
    this.httpService.addContactMe(this.contactForm.value).subscribe(()=>{
      alert("Message Sent.")
      this.contactForm.reset();
    })
  }
}
