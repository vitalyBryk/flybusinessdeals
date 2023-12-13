import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatTheDealFormComponent } from './beat-the-deal-form.component';

describe('BeatTheDealFormComponent', () => {
  let component: BeatTheDealFormComponent;
  let fixture: ComponentFixture<BeatTheDealFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeatTheDealFormComponent]
    });
    fixture = TestBed.createComponent(BeatTheDealFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
