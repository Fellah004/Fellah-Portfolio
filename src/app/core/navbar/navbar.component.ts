import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  personalInfo = PERSONAL_INFO;
  isScrolled = false;
  mobileMenuOpen = false;

  navLinks = [
    { path: '/portfolio', label: 'Home', exact: true },
    { path: '/portfolio/about', label: 'About', exact: false },
    { path: '/portfolio/skills', label: 'Skills', exact: false },
    { path: '/portfolio/projects', label: 'Projects', exact: false },
    { path: '/portfolio/experience', label: 'Experience', exact: false },
    { path: '/portfolio/education', label: 'Education', exact: false },
    { path: '/portfolio/achievements', label: 'Achievements', exact: false },
    { path: '/portfolio/contact', label: 'Contact', exact: false }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
