import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDealsComponent } from './best-deals.component';

describe('BestDealsComponent', () => {
  let component: BestDealsComponent;
  let fixture: ComponentFixture<BestDealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestDealsComponent]
    });
    fixture = TestBed.createComponent(BestDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
