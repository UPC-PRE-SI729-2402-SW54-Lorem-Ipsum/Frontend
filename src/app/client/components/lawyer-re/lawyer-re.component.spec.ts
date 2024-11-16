import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerReComponent } from './lawyer-re.component';

describe('LawyerReComponent', () => {
  let component: LawyerReComponent;
  let fixture: ComponentFixture<LawyerReComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LawyerReComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawyerReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
