import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SKILLS_DATA } from '../../data/portfolio.data';
import { SkillCategory } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  categories: SkillCategory[] = SKILLS_DATA;
  activeFilter = 'all';

  filters = [
    { id: 'all', label: 'All Domains' },
    { id: 'programming-languages', label: 'Languages' },
    { id: 'frontend-development', label: 'Frontend' },
    { id: 'backend-development', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'development-tools', label: 'Dev Tools' },
    { id: 'core-concepts', label: 'Core CS' }
  ];

  setFilter(filterId: string) {
    this.activeFilter = filterId;
  }

  get filteredCategories(): SkillCategory[] {
    if (this.activeFilter === 'all') {
      return this.categories;
    }
    return this.categories.filter(cat => cat.id === this.activeFilter);
  }

  getCategoryIcon(id: string): string {
    switch (id) {
      case 'programming-languages': return '💻';
      case 'frontend-development': return '🎨';
      case 'backend-development': return '⚙️';
      case 'databases': return '🗄️';
      case 'development-tools': return '🛠️';
      case 'core-concepts': return '🧠';
      default: return '⚡';
    }
  }
}
