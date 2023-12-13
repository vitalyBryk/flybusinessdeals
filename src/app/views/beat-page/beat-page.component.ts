import { Component } from '@angular/core';

@Component({
  selector: 'app-beat-page',
  templateUrl: './beat-page.component.html',
  styleUrls: ['./beat-page.component.scss']
})
export class BeatPageComponent {


  public searchFlightClick(event:any){
    console.log(event);
  }


}
