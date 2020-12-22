import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaplteDriveComponent } from './temaplte-drive.component';

describe('TemaplteDriveComponent', () => {
  let component: TemaplteDriveComponent;
  let fixture: ComponentFixture<TemaplteDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaplteDriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaplteDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
