import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsearchComponent } from './msearch.component';

describe('MsearchComponent', () => {
  let component: MsearchComponent;
  let fixture: ComponentFixture<MsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
