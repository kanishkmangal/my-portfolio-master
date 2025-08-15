import { Component, inject } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-home',
  imports: [
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactMeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  httpService = inject(HttpService);

  info: any;
  ngOnInit() {
    this.httpService.getAboutInfo().subscribe((result) => {
      this.info = result;
      console.log(this.info);
    });
  }
}
