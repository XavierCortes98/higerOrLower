import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortResultModalComponent } from './sort-result-modal.component';

describe('SortResultModalComponent', () => {
  let component: SortResultModalComponent;
  let fixture: ComponentFixture<SortResultModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortResultModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortResultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
