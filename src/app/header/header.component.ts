import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() childevent= new EventEmitter<boolean>();
  
  menuStatus:boolean= false;
  toggled()
  {
    this.menuStatus=!this.menuStatus;
    this.childevent.emit(this.menuStatus);
  }
}
