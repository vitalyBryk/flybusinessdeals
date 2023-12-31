import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ){}


  ngOnInit(): void {}


  public navigateTo(event:string):void{
    this.router.navigate([event])
  }

  public socialMediaIconClick():void{
    console.log("go to social media");
  }
}
