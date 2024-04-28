import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  @Input() customers: any[] = [];

  // Define Output properties to emit events
  @Output() editCustomer: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteCustomer: EventEmitter<number> = new EventEmitter<number>();

  // Method to emit edit event
  onEditCustomer(customer: any) {
    this.editCustomer.emit(customer);
  }

  // Method to emit delete event
  onDeleteCustomer(id: number) {
    this.deleteCustomer.emit(id); // Emitting the ID directly
  }
}
