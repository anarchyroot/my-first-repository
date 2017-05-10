import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgForComponent } from './directives-ng-for.component';

describe('DirectivesNgForComponent', () => {
  let component: DirectivesNgForComponent;
  let fixture: ComponentFixture<DirectivesNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
