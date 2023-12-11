import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-countact-us',
  templateUrl: './countact-us.component.html',
  styleUrls: ['./countact-us.component.scss']
})
export class CountactUsComponent implements OnInit{

  public contactUsFormGroup!: FormGroup;
  public codeInputValue: string = "";
  public randomCode: string = ""

  ngOnInit(): void {
    this.contactUsFormGroup = this.createFormGroup();
    this.randomCode = this.createRandomCode();
  }

  private createFormGroup(): FormGroup{
    return  new FormGroup({
      nameFormControl: new FormControl("",[Validators.required]),
      phoneFormControl: new FormControl("",[Validators.required]),
      emailFormControl: new FormControl( "",[Validators.required,Validators.email]),
      connetsFormControl: new FormControl(""),
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
    console.log(this.contactUsFormGroup , this.codeInputValue)
  }

  public disableBtnSubmit(): boolean{
    return !(this.codeInputValue.toUpperCase() === this.randomCode && this.contactUsFormGroup.status === "VALID");
  } 



}
