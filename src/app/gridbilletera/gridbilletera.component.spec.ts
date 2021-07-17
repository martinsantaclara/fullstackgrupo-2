import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridbilleteraComponent } from './gridbilletera.component';

describe('GridbilleteraComponent', () => {
  let component: GridbilleteraComponent;
  let fixture: ComponentFixture<GridbilleteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridbilleteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridbilleteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
