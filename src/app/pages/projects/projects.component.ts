import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROJECTS_DATA } from '../../data/portfolio.data';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS_DATA;
  selectedProject: Project | null = null;
  activeFilter = 'all';

  filters = [
    { id: 'all', label: 'All Projects (6)' },
    { id: 'fullstack', label: 'Full Stack & Microservices' },
    { id: 'ai', label: 'AI & Computer Vision' },
    { id: 'iot', label: 'IoT & Embedded' }
  ];

  setFilter(filterId: string) {
    this.activeFilter = filterId;
  }

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    if (this.activeFilter === 'fullstack') {
      return this.projects.filter(p => p.id === 'stayvista-hotel-management' || p.id === 'skillsphere' || p.id === 'eshoppingzone');
    }
    if (this.activeFilter === 'ai') {
      return this.projects.filter(p => p.id === 'ai-image-anomaly-detection' || p.id === 'realtime-inventory-management');
    }
    if (this.activeFilter === 'iot') {
      return this.projects.filter(p => p.id === 'smart-pet-feeder');
    }
    return this.projects;
  }

  openModal(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
