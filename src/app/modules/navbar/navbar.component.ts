import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() navigationClick = new EventEmitter();

  public mailDates: string = "booking@flybusinessdeals.com";
  public phoneDates: string = "+373 79 578 548 (Call us 24/7)";
  private previusTarget: any;


  public navBarBtnClick(event:any, path:string):void{
    const defaultBgColor = "white";
    const defaultTextColor = "#393939"
    if(this.previusTarget){
      this.previusTarget.style.backgroundColor = defaultBgColor;
      this.previusTarget.style.color = defaultTextColor;
    } 
    this.previusTarget = event.target;
    event.target.style.backgroundColor = "#713b4d";
    event.target.style.color = " #feffff"

    this.navigationClick.emit(path);
  }
}
