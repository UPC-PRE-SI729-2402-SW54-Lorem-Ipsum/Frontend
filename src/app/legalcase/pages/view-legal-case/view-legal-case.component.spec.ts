import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLegalCaseComponent } from './view-legal-case.component';

describe('ViewLegalCaseComponent', () => {
  let component: ViewLegalCaseComponent;
  let fixture: ComponentFixture<ViewLegalCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewLegalCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLegalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
