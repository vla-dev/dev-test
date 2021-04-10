import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGenerationComponent } from './data-generation.component';

describe('DataGenerationComponent', () => {
  let component: DataGenerationComponent;
  let fixture: ComponentFixture<DataGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
