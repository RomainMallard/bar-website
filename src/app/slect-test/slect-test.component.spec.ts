import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlectTestComponent } from './slect-test.component';

describe('SlectTestComponent', () => {
  let component: SlectTestComponent;
  let fixture: ComponentFixture<SlectTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlectTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
