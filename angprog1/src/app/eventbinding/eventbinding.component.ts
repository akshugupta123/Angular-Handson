import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  dt:string = "";
  notifyME()//method of the Eventbindingcomponent
  {
    alert("hello");
  }
  display()
  {
    this.dt = new Date().toString();
  }

}
