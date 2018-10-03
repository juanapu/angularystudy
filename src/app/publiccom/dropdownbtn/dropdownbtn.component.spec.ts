import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownbtnComponent } from './dropdownbtn.component';

describe('DropdownbtnComponent', () => {
  let component: DropdownbtnComponent;
  let fixture: ComponentFixture<DropdownbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
