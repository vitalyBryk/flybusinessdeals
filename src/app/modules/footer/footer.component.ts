import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Output() socialMediaClick = new EventEmitter();

  public yearInfo: string = "© 2023 FlyBusinessDeals";
  public aboutUsInfo: string = "FlyBusinessDeals was created by travel enthusiasts and business experts who envisioned making high-class flying accessible and enjoyable. We strive to handpick the best value in business travel. » ";
  public phoneDates:string = "+373 79 578 548";
  public mailDates:string = "booking@flybusinessdeals.com";


  public socialMediaIconClick():void{
    this.socialMediaClick.emit();
  }
}

