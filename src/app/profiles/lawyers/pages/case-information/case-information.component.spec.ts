import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInformationComponent } from './case-information.component';

describe('CaseInformationComponent', () => {
  let component: CaseInformationComponent;
  let fixture: ComponentFixture<CaseInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
