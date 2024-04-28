import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Define the Customer interface here
interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  orders: Order[];
}

// Define the Order interface here
interface Order {
  id: number;
  total: number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customerId!: number; // Initialize customerId with '!' to indicate it will be initialized later
  customer!: Customer; // Initialize customer with '!' to indicate it will be initialized later

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerId = +params['customerId'];
      this.fetchCustomerDetails(this.customerId);
    });
  }

  fetchCustomerDetails(customerId: number): void {
    // Here you can directly assign customer data based on the customerId
    const foundCustomer = this.getCustomerById(customerId);
    if (foundCustomer) {
      this.customer = foundCustomer;
    } else {
      // Handle case when customer is not found
      console.error('Customer not found for ID:', customerId);
    }
  }

  // Function to get customer data by ID (replace this with your actual logic)
  getCustomerById(id: number): Customer | undefined {
    // Example: Static customer data (replace this with your actual data source)
    const customers: Customer[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        orders: [
          { id: 1, total: 100 },
          { id: 2, total: 200 }
        ]
      },
      // Add more customers as needed
    ];

    // Find the customer with the given ID
    return customers.find(customer => customer.id === id);
  }
}
