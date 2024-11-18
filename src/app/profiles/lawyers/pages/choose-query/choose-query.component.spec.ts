import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQueryComponent } from './choose-query.component';

describe('ChooseQueryComponent', () => {
  let component: ChooseQueryComponent;
  let fixture: ComponentFixture<ChooseQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseQueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
