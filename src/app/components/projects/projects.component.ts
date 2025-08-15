import { Component, inject } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { HttpService } from '../../http.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Lpu Survey Form',
      detail: 'A web survey form for facilities.',
      image: 'assets/images/Surveyform.png',
      tech: ['Angular', 'Next.js', 'Node.js'],
      url: 'https://github.com/yourusername/library-seat-booking'
    },
    {
      name: 'Disk Scheduling Visualizer',
      detail: 'A tool to visualize and compare disk scheduling algorithms.',
      image: 'assets/images/disk.png',
      tech: ['Angular', 'JavaScript'],
      url: 'https://github.com/yourusername/disk-scheduling'
    },
    {
      name: 'Portfolio Website',
      detail: 'My personal portfolio to showcase projects and skills.',
      image: 'assets/images/portfolio.png',
      tech: ['Angular', 'Tailwind CSS'],
      url: 'https://yourusername.github.io/portfolio'
    }
  ];
  httpService = inject(HttpService);
  ngOnInit() {
    this.httpService.getProjects().subscribe((result) => {
      // this.projects = result;
      console.log(this.projects);
    });
  }
}
