import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  @Output() readMore = new EventEmitter();

  public welcomeInfoText: string = "FlyBusinessDeals was created by travel enthusiasts and business experts who envisioned making high-class flying accessible and enjoyable. <br /> We strive to handpick the best value in business travel. Effortless travel begins with FlyBusinessDeals. We deliver business class perfection with ease."

}
