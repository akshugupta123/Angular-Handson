import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  newCustomer: any = {}; // Define newCustomer property
  editingCustomer: any = null; // Track the customer being edited
  customers: Customer[] = [
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
    // Add more sample customers if needed
  ]; // Assuming you have a customers array
  filteredCustomers: Customer[] = []; // Initialize an array to hold filtered customers
  viewMode: string = 'list'; // Define viewMode property with initial value 'list'

  constructor() {
    // Initially show all customers
    this.filteredCustomers = this.customers.slice();
  }

  addCustomer() {
    // Assign a unique ID to the new customer
    this.newCustomer.id = this.customers.length + 1;

    // Add logic to add a new customer to the customers array
    // For example:
    this.customers.push(this.newCustomer);

    // After adding, clear the newCustomer object for next entry
    this.newCustomer = {};

    // Update filtered customers after adding
    this.filterCustomers('');
  }

  deleteCustomer(id: number) {
    // Add logic to delete a customer from the customers array
    // For example:
    this.customers = this.customers.filter(customer => customer.id !== id);

    // Update filtered customers after deletion
    this.filterCustomers('');
  }

  editCustomer(customer: any) {
    // Set the customer to be edited and populate the form with its data
    this.editingCustomer = { ...customer };
  }

  updateCustomer() {
    // Find the index of the editing customer in the array
    const index = this.customers.findIndex(customer => customer.id === this.editingCustomer.id);
    if (index !== -1) {
      // Update the customer data at the found index
      this.customers[index] = { ...this.editingCustomer };
      // Clear the editingCustomer and reset the form
      this.editingCustomer = null;
    }
  }

  cancelEdit() {
    // Clear the editingCustomer without updating data
    this.editingCustomer = null;
  }

  handleSearch(event: any) {
    const searchTerm = event.target.value;
    this.filterCustomers(searchTerm);
  }

  filterCustomers(searchTerm: string) {
    if (searchTerm.trim() === '') {
      // If search term is empty, show all customers
      this.filteredCustomers = this.customers.slice();
    } else {
      // Filter customers whose first name or last name contains the search term
      this.filteredCustomers = this.customers.filter(customer =>
        customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  viewOrders(customer: Customer) {
    // Implement logic to view orders for a customer
    console.log('Viewing orders for:', customer.firstName, customer.lastName);
  }
}

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  orders: Order[];
}

interface Order {
  id: number;
  total: number;
}
