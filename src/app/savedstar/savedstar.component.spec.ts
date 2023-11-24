import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedstarComponent } from './savedstar.component';

describe('SavedstarComponent', () => {
  let component: SavedstarComponent;
  let fixture: ComponentFixture<SavedstarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedstarComponent]
    });
    fixture = TestBed.createComponent(SavedstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
