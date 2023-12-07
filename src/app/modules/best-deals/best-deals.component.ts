import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-deals',
  templateUrl: './best-deals.component.html',
  styleUrls: ['./best-deals.component.scss']
})
export class BestDealsComponent  implements OnInit{


  public cardsArr: Array<any> = new Array<any>();
  public cardIfoObj:any ={
    imageSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg", 
    ofertTitle: "Save up to 1,568$ off business ",
    ofertInfo: "Business class flights to Europe"
  }

  ngOnInit(): void {
    for(let i = 0; i < 3; i++){
      this.cardsArr.push(this.cardIfoObj);
    }
    console.log(this.cardsArr);
    
  }

  public readMoreClick(){}
}
