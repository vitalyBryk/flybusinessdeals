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
    info_1:"",
    title_2:"How It Works:",
    info_2:"",
    title_3:"our Information:",
    info_3:"",
    title_4:"Details of Better Deal:",
    info_4:"",
    title_5:"Additional Comments:",
    info_5:"",
  }
}
