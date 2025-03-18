import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaMundoComponent } from './grafica-mundo.component';

describe('GraficaMundoComponent', () => {
  let component: GraficaMundoComponent;
  let fixture: ComponentFixture<GraficaMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaMundoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
