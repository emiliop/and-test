import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasInteresComponent } from './temas-interes.component';

describe('TemasInteresComponent', () => {
  let component: TemasInteresComponent;
  let fixture: ComponentFixture<TemasInteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasInteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
