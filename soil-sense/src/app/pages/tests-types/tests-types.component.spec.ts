import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsTypesComponent } from './tests-types.component';

describe('TestsTypesComponent', () => {
  let component: TestsTypesComponent;
  let fixture: ComponentFixture<TestsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
