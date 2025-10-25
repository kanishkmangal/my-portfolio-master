import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  info: any;
  httpService = inject(HttpService);
  ngOnInit() {
    this.httpService.getAboutInfo().subscribe((result) => {
      this.info = result;
    });
  }
}
