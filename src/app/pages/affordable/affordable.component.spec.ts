import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffordableComponent } from './affordable.component';

describe('AffordableComponent', () => {
  let component: AffordableComponent;
  let fixture: ComponentFixture<AffordableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffordableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffordableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
