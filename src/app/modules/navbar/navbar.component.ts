import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() navigationClick = new EventEmitter();
  @Output() socialMediaClick = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setBackgroundFirstItem();
  }

  public mailDates: string = "booking@flybusinessdeals.com";
  public phoneDates: string = "+373 79 578 548 (Call us 24/7)";
  private previusTarget: any;

  public navBarBtnClick(event:any, path:string):void{
    this.setBackgroudSelectedItem(event);
    this.navigationClick.emit(path);
  }

  public socialMediaIconClick():void{
    this.socialMediaClick.emit();
  }


  setBackgroundFirstItem():void{
   const timeout = setTimeout(() => {
    const id = this.router.url.replace("/","");
    this.previusTarget = document.getElementById(id);
    this.previusTarget.style.backgroundColor = "#713b4d";
    this.previusTarget.style.color = "#feffff";
    clearTimeout(timeout);
   }, 10); 
  }

  setBackgroudSelectedItem(event:any):void{
    const defaultBgColor = "white";
    const defaultTextColor = "#393939";
    if(this.previusTarget){
      this.previusTarget.style.backgroundColor = defaultBgColor;
      this.previusTarget.style.color = defaultTextColor;
    } 
    this.previusTarget = event.target;
    event.target.style.backgroundColor = "#713b4d";
    event.target.style.color = "#feffff";

  }
}
