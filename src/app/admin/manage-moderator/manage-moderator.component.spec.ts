import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageModeratorComponent } from './manage-moderator.component';

describe('ManageModeratorComponent', () => {
  let component: ManageModeratorComponent;
  let fixture: ComponentFixture<ManageModeratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageModeratorComponent]
    });
    fixture = TestBed.createComponent(ManageModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
