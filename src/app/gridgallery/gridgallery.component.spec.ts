import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridgalleryComponent } from './gridgallery.component';

describe('GridgalleryComponent', () => {
  let component: GridgalleryComponent;
  let fixture: ComponentFixture<GridgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridgalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
