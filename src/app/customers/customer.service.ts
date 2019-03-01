import { Subject } from 'rxjs';
import { Customer } from './customer.model';

export class CustomerService {
    customersChanged = new Subject<Customer[]>()

    private defaultCustomers: Customer[] = [
        new Customer('CustomerName_1', 20, []),
        new Customer('CustomerName_2', 21, [1, 2, 3, 4])
    ]
    
    constructor() {}

    getCustomers() {
        return this.defaultCustomers.slice()
    }

    addCustomer(customer: Customer) {
        this.defaultCustomers.push(customer)
        this.customersChanged.next(this.defaultCustomers.slice());
    }
}