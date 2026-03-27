import { Component } from '@angular/core';
import { DesktopComponent } from './components/desktop/desktop';
import { profileIdentity } from './content/profile-content';

@Component({
  selector: 'app-root',
  imports: [DesktopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = `${profileIdentity.name} - ${profileIdentity.title}`;
}
