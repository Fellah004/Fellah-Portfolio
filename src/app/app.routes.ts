import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: HomeComponent, title: 'Fellah A | Software Developer' },
  { path: 'portfolio/about', component: AboutComponent, title: 'About Me | Fellah A' },
  { path: 'portfolio/skills', component: SkillsComponent, title: 'Technical Skills | Fellah A' },
  { path: 'portfolio/projects', component: ProjectsComponent, title: 'Projects | Fellah A' },
  { path: 'portfolio/experience', component: ExperienceComponent, title: 'Experience | Fellah A' },
  { path: 'portfolio/education', component: EducationComponent, title: 'Education | Fellah A' },
  { path: 'portfolio/achievements', component: AchievementsComponent, title: 'Achievements | Fellah A' },
  { path: 'portfolio/contact', component: ContactComponent, title: 'Contact | Fellah A' },
  { path: '**', redirectTo: 'portfolio' }
];
