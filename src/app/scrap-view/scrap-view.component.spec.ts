import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapViewComponent } from './scrap-view.component';

describe('ScrapViewComponent', () => {
  let component: ScrapViewComponent;
  let fixture: ComponentFixture<ScrapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
