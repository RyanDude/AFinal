import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMentorComponent } from './amentor.component';

describe('AMentorComponent', () => {
  let component: AMentorComponent;
  let fixture: ComponentFixture<AMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AMentorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
