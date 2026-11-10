import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ACHIEVEMENTS_DATA } from '../../data/portfolio.data';
import { AchievementItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  achievements: AchievementItem[] = ACHIEVEMENTS_DATA;
  activeFilter = 'all';

  filters = [
    { id: 'all', label: 'All Milestones' },
    { id: 'Certifications', label: 'Certifications' },
    { id: 'Competitions', label: 'Competitions & Hackathons' },
    { id: 'Innovation & Awards', label: 'Innovation & Awards' },
    { id: 'Leadership', label: 'Leadership' }
  ];

  setFilter(filterId: string) {
    this.activeFilter = filterId;
  }

  get filteredAchievements(): AchievementItem[] {
    if (this.activeFilter === 'all') {
      return this.achievements;
    }
    return this.achievements.filter(a => a.category === this.activeFilter);
  }

  getCategoryIcon(cat: string): string {
    switch (cat) {
      case 'Certifications': return '📜';
      case 'Competitions': return '🏆';
      case 'Innovation & Awards': return '💡';
      case 'Leadership': return '👑';
      default: return '⭐';
    }
  }
}
