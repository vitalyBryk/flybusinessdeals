import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.scss']
})
export class ChooseUsComponent {
   public ChooseUsArr: Array<any>=[
    {
      iconName:"fa-solid fa-gear",
      subtitle:"Unwavering Commitment",
      info:"Our pledge at FlyBusinessDeals is to deliver a seamless travel experience. We are committed to providing personalized service that meets your travel needs, with 24/7 support to ensure peace of mind.",
    },
    {
      iconName:"fa-solid fa-gear",
      subtitle:"Unwavering Commitment",
      info:"Our pledge at FlyBusinessDeals is to deliver a seamless travel experience. We are committed to providing personalized service that meets your travel needs, with 24/7 support to ensure peace of mind.",
    },
    {
      iconName:"fa-solid fa-gear",
      subtitle:"Unwavering Commitment",
      info:"Our pledge at FlyBusinessDeals is to deliver a seamless travel experience. We are committed to providing personalized service that meets your travel needs, with 24/7 support to ensure peace of mind.",
    },
   ];
}
