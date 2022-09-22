import { Component} from '@angular/core';
import { products } from '../../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  _products = products;

  share(){
    window.alert('The products has been shared!')
  }
}
