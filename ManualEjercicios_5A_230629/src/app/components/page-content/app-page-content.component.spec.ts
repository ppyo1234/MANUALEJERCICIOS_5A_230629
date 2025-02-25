import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageContentComponent } from './app-page-content.component';

describe('AppPageContentComponent', () => {
  let component: AppPageContentComponent;
  let fixture: ComponentFixture<AppPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPageContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
