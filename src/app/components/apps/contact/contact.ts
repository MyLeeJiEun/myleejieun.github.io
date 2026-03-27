import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contactNotes, profileIdentity } from '../../../content/profile-content';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly contact = profileIdentity;
  readonly notes = contactNotes;
}
