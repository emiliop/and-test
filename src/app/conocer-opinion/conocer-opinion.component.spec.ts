import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocerOpinionComponent } from './conocer-opinion.component';

describe('ConocerOpinionComponent', () => {
  let component: ConocerOpinionComponent;
  let fixture: ComponentFixture<ConocerOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConocerOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocerOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
