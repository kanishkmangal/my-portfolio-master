import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
 skills: any[]=[];
 httpService = inject(HttpService);
 ngOnInit(){
   this.httpService.getSkills().subscribe(result=>{
    this.skills = result;
    console.log(this.skills)
   })
 }
}
