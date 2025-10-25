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
      // image: 'assets/images/Surveyform.png',
      tech: ['HTML',  'CSS'],
      url: ' https://kanishkmangal.github.io/LPU-Survey-Form/'
    },
    {
      name: 'Registration Form',
      detail: 'A simple registration form',
      // image: 'assets/images/registration.png',
      tech: ['HTML', 'CSS'],
      url: ' https://kanishkmangal.github.io/registration-form/'
    },
    {
      name: 'Portfolio Website',
      detail: 'My personal portfolio to showcase projects and skills.',
      // image: 'assets/images/portfolio.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://kanishkmangal.github.io/Portfolio/'
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
