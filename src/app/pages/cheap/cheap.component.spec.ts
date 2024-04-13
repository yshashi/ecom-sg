import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheapComponent } from './cheap.component';

describe('CheapComponent', () => {
  let component: CheapComponent;
  let fixture: ComponentFixture<CheapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
