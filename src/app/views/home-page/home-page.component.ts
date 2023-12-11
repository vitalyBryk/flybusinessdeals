import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {


  public searchFlightClick(event:any){
    console.log(event);
  }

  contactsBtnClick(){
    console.log("contacts");
  }

  readMoreClick(event:any){
    switch(event){
      case "welcome": console.log("welcome"); break;
      case "deals": console.log("deals"); break;
      case "about": console.log("about"); break;
    }
  }

  bookNowClick(event:any){
    console.log(event);
  }
}
