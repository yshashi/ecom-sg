import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostlyComponent } from './costly.component';

describe('CostlyComponent', () => {
  let component: CostlyComponent;
  let fixture: ComponentFixture<CostlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
