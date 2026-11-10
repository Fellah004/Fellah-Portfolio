import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EDUCATION_DATA, EDUCATION_STATISTICS } from '../../data/portfolio.data';
import { EducationItem, EducationStatistic } from '../../models/portfolio.models';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: EducationItem[] = EDUCATION_DATA;
  statistics: EducationStatistic[] = EDUCATION_STATISTICS;
}
