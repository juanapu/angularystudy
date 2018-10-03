import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStartComponent } from './detail-start.component';

describe('DetailStartComponent', () => {
  let component: DetailStartComponent;
  let fixture: ComponentFixture<DetailStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
