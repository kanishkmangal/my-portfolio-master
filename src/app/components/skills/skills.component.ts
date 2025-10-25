  import { Component, inject } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
 skills=[
    { name: 'JavaScript', exp: 2 },
    { name: 'Python', exp: 1.5 },
    { name: 'C++', exp: 1.5 },
    { name: 'Java', exp: 2 },
    { name: 'HTML/CSS', exp: 2 },
    { name: 'SQL', exp: 1 }
 ];
 httpService = inject(HttpService);
 ngOnInit(){
   this.httpService.getSkills().subscribe(result=>{
    this.skills = result;
    console.log(this.skills)
   })
 }
}
