import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShippingCost } from 'src/app/interfaces/shipping-cost';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingCosts$!: Observable<ShippingCost[]>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.shippingCosts$ = this.cartService.getShippingPrices();
  }

}
