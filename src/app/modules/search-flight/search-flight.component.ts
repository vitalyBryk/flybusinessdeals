import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss'],
})
export class SearchFlightComponent implements OnInit {

  @Output() searchFlight = new EventEmitter();

  public titleText: string = "Effortless travel begins with FlyBusinessDeals";
  public subtitleText: string = "We deliver business class perfection with ease";
  public searchFormGroup!: FormGroup;

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  selectedStates = this.states; 

  ngOnInit(): void {
    this.searchFormGroup = this.createFormGroup();
  }

  private createFormGroup(): FormGroup{

    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate()+ 7);

    return  new FormGroup({
      flightFrom: new FormControl("",[Validators.required]),
      flightTo: new FormControl("",[Validators.required]),
      departureDate: new FormControl( today,[Validators.required]),
      returnDate: new FormControl(nextWeek,[Validators.required]),
      passengers: new FormControl("",[Validators.required]),
    })
  }

  public contactsBtnClick():void{
  }

  public searchFlightClick(){
    this.searchFlight.emit(this.searchFormGroup.value)
  }

}
