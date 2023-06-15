import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAnimationComponent } from './test-animation.component';

describe('TestAnimationComponent', () => {
  let component: TestAnimationComponent;
  let fixture: ComponentFixture<TestAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
