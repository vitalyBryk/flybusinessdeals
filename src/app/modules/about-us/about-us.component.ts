import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  
  @Output() readMore = new EventEmitter();
  
  public aboutUsObj: any = {
    fistBlock: {
      information: [{
        title:"Personalized Service Just for You",
        info:"Every journey you take with us is personalized. Select your seat, set your meal preferences, and enjoy the nuances of a service that's attuned to your travel desires. "
      },{
        title:"Always-On Assistance:",
        info:"Day or night, we're here for you. Our dedicated team provides round-the-clock assistance, ensuring your travel is uninterrupted and stress-free, whenever you need us."
      },{
        title:"Exclusive Business Deals:",
        info:"Unlock exceptional value with FlyBusinessDeals. Our elite business class fares grant you luxury travel without the premium price tag - curated, negotiated, secured just for you.",
      }],
      imgSrc: "https://media.istockphoto.com/id/187422898/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B0%D1%80%D0%B0-%D0%B2-%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82%D1%83-%D1%81-%D1%87%D0%B5%D0%BC%D0%BE%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2.jpg?s=2048x2048&w=is&k=20&c=gvs7qu7qeSSgwR7uUwHj9zqq_hJJU668UnVl2iqvniA="
    },
    secondBlock:{
      information: [{
        title:"Personalized Service Just for You",
        info:"Every journey you take with us is personalized. Select your seat, set your meal preferences, and enjoy the nuances of a service that's attuned to your travel desires. "
      },{
        title:"Always-On Assistance:",
        info:"Day or night, we're here for you. Our dedicated team provides round-the-clock assistance, ensuring your travel is uninterrupted and stress-free, whenever you need us."
      },{
        title:"Exclusive Business Deals:",
        info:"Unlock exceptional value with FlyBusinessDeals. Our elite business class fares grant you luxury travel without the premium price tag - curated, negotiated, secured just for you.",
      }],
      imgSrc: "https://media.istockphoto.com/id/187422898/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B0%D1%80%D0%B0-%D0%B2-%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82%D1%83-%D1%81-%D1%87%D0%B5%D0%BC%D0%BE%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2.jpg?s=2048x2048&w=is&k=20&c=gvs7qu7qeSSgwR7uUwHj9zqq_hJJU668UnVl2iqvniA="
    },
};

  ngOnInit(): void {
    
  }





  public readMoreClick(){
    this.readMore.emit("about")
  }
}
