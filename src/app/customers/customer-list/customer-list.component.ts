import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = []
  
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers()
    this.customerService.customersChanged.subscribe((c: Customer[]) => {
      this.customers = c
    })
    
  }

  addCustomer() {
    this.customerService.addCustomer({ name: 'teste1', age: 13, subscriptions: []})
  }

}
