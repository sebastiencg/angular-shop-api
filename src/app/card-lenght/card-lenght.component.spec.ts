import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLenghtComponent } from './card-lenght.component';

describe('CardLenghtComponent', () => {
  let component: CardLenghtComponent;
  let fixture: ComponentFixture<CardLenghtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLenghtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardLenghtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
