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
  projects: Product[] = [];
  httpService = inject(HttpService);
  ngOnInit() {
    this.httpService.getProjects().subscribe((result) => {
      this.projects = result;
      console.log(this.projects);
    });
  }
}
