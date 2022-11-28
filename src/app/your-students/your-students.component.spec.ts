import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourStudentsComponent } from './your-students.component';

describe('YourStudentsComponent', () => {
  let component: YourStudentsComponent;
  let fixture: ComponentFixture<YourStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
