import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumComponent } from './dum.component';

describe('DumComponent', () => {
  let component: DumComponent;
  let fixture: ComponentFixture<DumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
