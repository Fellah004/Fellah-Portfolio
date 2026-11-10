import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PERSONAL_INFO } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  personalInfo = PERSONAL_INFO;

  pillars = [
    {
      icon: '🛡️',
      title: 'Enterprise Architecture',
      text: 'Specializing in Java 21, Spring Boot, Eureka service discovery, distributed microservices, and secure JWT authentication.'
    },
    {
      icon: '⚡',
      title: 'Scalable Engineering',
      text: 'Focusing on clean modular code, relational database optimization with MySQL, message queues with RabbitMQ, and containerized deployments.'
    },
    {
      icon: '🎯',
      title: 'Full-Stack Delivery',
      text: 'Bridging high-throughput backend APIs with modern, responsive Angular user interfaces for seamless end-to-end user experiences.'
    }
  ];
}
