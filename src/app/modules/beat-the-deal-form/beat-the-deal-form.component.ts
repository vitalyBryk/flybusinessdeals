import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-beat-the-deal-form',
  templateUrl: './beat-the-deal-form.component.html',
  styleUrls: ['./beat-the-deal-form.component.scss']
})
export class BeatTheDealFormComponent implements OnInit {

  public beatTheDealFormGroup!: FormGroup;
  public codeInputValue: string = "";
  public randomCode: string = "";



  ngOnInit(): void {
    this.beatTheDealFormGroup = this.createFormGroup();
    this.randomCode = this.createRandomCode();
  }


  private createFormGroup(): FormGroup{
    return  new FormGroup({
      flightFrom: new FormControl("",[Validators.required]),
      flightTo:new FormControl("",[Validators.required]),
      departureDate:new FormControl("",[Validators.required]),
      returnDate:new FormControl("",[Validators.required]),
      passengers:new FormControl("",[Validators.required]),
      nameFormControl: new FormControl("",[Validators.required]),
      phoneFormControl: new FormControl("",[Validators.required]),
      emailFormControl: new FormControl( "",[Validators.required,Validators.email]),
      commentsFormControl: new FormControl(""),
      attachFileformControl: new FormControl(""),
    })
  }


  public createRandomCode(): string {
    const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let generatedCode = "";
    for (let i=0; i < 4; i++){
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      generatedCode += allCharacters.charAt(randomIndex); 
    }
    return generatedCode
  }

  public btnSubmitClick(): void{
    console.log(this.beatTheDealFormGroup , this.codeInputValue)
  }

  public disableBtnSubmit(): boolean{
    return !(this.codeInputValue.toUpperCase() === this.randomCode && this.beatTheDealFormGroup.status === "VALID");
  }

  public infoAboutObj = {
    title_1: "BETTer Deal? Let Us Know!",
    info_1:"At Fly Business Deals, we're committed to providing you with the best possible travel experience at unbeatable prices. If you've come across a lower price for the same flight elsewhere, we want to hear about it!",
    title_2:"How It Works:",
    info_2: [
      {num:"1", title:"Fill in the Details", info:"Use the form below to share the details of the better deal you found. Include the website, date, and any relevant information."},
      {num:"2", title:"Verification Process", info:"Our team will swiftly verify the information provided. We appreciate your assistance in ensuring the accuracy of the details."},
      {num:"3", title:"Enjoy Additional Benefits", info:"If your claim is verified, not only will you secure the lowest price, but we'll also offer you additional enefits as a token of appreciation."}
    ],
    title_3:"our Information:",
    info_3:"<p>•Full Name:</p><p>• Email Address:</p><p> • Phone Number:</p>",
    title_4:"Details of Better Deal:",
    info_4:"<p>• Competitor's Website:</p><p>• Flight Details:</p><p>• Price Quoted:</p>",
    title_5:"Additional Comments:",
    info_5:"Feel confident that Fly Business Deals is dedicated to beating the competition and ensuring you get the most value for your journey. Thank you for choosing Fly Business Deals —where we go the extra mile to beat the deal for you",
  }
}
