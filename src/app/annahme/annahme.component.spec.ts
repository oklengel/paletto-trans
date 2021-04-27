import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnahmeComponent } from './annahme.component';

describe('AnnahmeComponent', () => {
  let component: AnnahmeComponent;
  let fixture: ComponentFixture<AnnahmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnahmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnahmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
