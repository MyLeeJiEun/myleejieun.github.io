import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projectEntries } from '../../../content/profile-content';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly projects = projectEntries;
}
