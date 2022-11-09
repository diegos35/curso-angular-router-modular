import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniciansFormComponent } from './technicians-form.component';

describe('TechniciansFormComponent', () => {
  let component: TechniciansFormComponent;
  let fixture: ComponentFixture<TechniciansFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechniciansFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniciansFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
