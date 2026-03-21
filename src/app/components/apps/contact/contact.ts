import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  contact = {
    email: 'librazhao0032@gmail.com',
    github: 'github.com/myleejieun',
    location: 'Philadelphia, PA'
  };
}
