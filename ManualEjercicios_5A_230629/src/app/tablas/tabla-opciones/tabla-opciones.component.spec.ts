import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaOpcionesComponent } from './tabla-opciones.component';

describe('TablaOpcionesComponent', () => {
  let component: TablaOpcionesComponent;
  let fixture: ComponentFixture<TablaOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaOpcionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
