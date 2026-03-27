import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { skillGroups } from '../../../content/profile-content';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly skillGroups = skillGroups;
}
