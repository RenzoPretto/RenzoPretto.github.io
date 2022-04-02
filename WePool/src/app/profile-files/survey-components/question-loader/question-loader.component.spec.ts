import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionLoaderComponent } from './question-loader.component';

describe('QuestionLoaderComponent', () => {
  let component: QuestionLoaderComponent;
  let fixture: ComponentFixture<QuestionLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
