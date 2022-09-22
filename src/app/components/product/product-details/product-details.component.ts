import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { products } from 'src/app/products';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // get the product id
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // find the product that correspond with the provided id
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
