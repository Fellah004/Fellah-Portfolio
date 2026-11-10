import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  personalInfo = PERSONAL_INFO;
  copiedField: string | null = null;

  contactCards = [
    {
      id: 'email',
      icon: '✉️',
      title: 'Email Address',
      value: PERSONAL_INFO.email,
      href: 'mailto:' + PERSONAL_INFO.email,
      actionText: 'Send Email',
      isExternal: true
    },
    {
      id: 'phone',
      icon: '📱',
      title: 'Phone Number',
      value: PERSONAL_INFO.phone,
      href: 'tel:' + PERSONAL_INFO.phone.replace(/\s+/g, ''),
      actionText: 'Call Direct',
      isExternal: true
    },
    {
      id: 'linkedin',
      icon: '💼',
      title: 'LinkedIn Profile',
      value: 'linkedin.com/in/fellah004',
      href: PERSONAL_INFO.linkedinUrl,
      actionText: 'Connect on LinkedIn',
      isExternal: true
    },
    {
      id: 'github',
      icon: '🐙',
      title: 'GitHub Profile',
      value: 'github.com/Fellah004',
      href: PERSONAL_INFO.githubUrl,
      actionText: 'View Repositories',
      isExternal: true
    },
    {
      id: 'location',
      icon: '📍',
      title: 'Current Location',
      value: PERSONAL_INFO.location,
      href: null,
      actionText: 'Tamil Nadu, India',
      isExternal: false
    }
  ];

  copyToClipboard(text: string, fieldId: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedField = fieldId;
      setTimeout(() => {
        this.copiedField = null;
      }, 2500);
    });
  }
}
