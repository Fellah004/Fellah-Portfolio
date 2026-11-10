import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PERSONAL_INFO, PROJECTS_DATA } from '../../data/portfolio.data';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  personalInfo = PERSONAL_INFO;
  featuredProject: Project = PROJECTS_DATA[0]; // StayVista
}
