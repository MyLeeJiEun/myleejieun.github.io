import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  educationEntries,
  profileIdentity,
  profileSummary,
  projectEntries,
  skillGroups,
  workEntries,
} from '../../../content/profile-content';

type AboutScreen = 'about' | 'education' | 'skills' | 'projects' | 'contact';

const ABOUT_SCREENS: AboutScreen[] = ['about', 'education', 'skills', 'projects', 'contact'];

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  readonly profile = profileIdentity;
  readonly summary = profileSummary;
  readonly education = educationEntries;
  readonly workExperience = workEntries;
  readonly skills = skillGroups;
  readonly projects = projectEntries;

  activeScreen: AboutScreen = 'about';
  navbarVisible = false;

  changeScreen(screen: AboutScreen) {
    this.activeScreen = screen;
    this.navbarVisible = false;
    localStorage.setItem('about-section', screen);
  }

  toggleNavbar() {
    this.navbarVisible = !this.navbarVisible;
  }

  ngOnInit() {
    const lastScreen = localStorage.getItem('about-section');
    if (lastScreen && this.isAboutScreen(lastScreen)) {
      this.activeScreen = lastScreen;
    }
  }

  private isAboutScreen(screen: string): screen is AboutScreen {
    return ABOUT_SCREENS.includes(screen as AboutScreen);
  }
}
