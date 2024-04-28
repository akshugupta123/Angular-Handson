import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
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
    this.deleteCustomer.emit(id);
  }
}
