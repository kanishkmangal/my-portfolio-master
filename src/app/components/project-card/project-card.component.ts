import { Component, Input, input } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
@Input() product! :Product;
openDemo() {
    if (this.product.url) {
      window.open(this.product.url, '_blank');
    }
  }
}
