import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfileComponent } from './mfile.component';

describe('MfileComponent', () => {
  let component: MfileComponent;
  let fixture: ComponentFixture<MfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
