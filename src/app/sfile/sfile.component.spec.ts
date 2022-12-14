import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfileComponent } from './sfile.component';

describe('SfileComponent', () => {
  let component: SfileComponent;
  let fixture: ComponentFixture<SfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
