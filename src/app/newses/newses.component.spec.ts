import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsesComponent } from './newses.component';

describe('NewsesComponent', () => {
  let component: NewsesComponent;
  let fixture: ComponentFixture<NewsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
