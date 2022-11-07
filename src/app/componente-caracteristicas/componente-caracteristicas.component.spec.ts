import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCaracteristicasComponent } from './componente-caracteristicas.component';

describe('ComponenteCaracteristicasComponent', () => {
  let component: ComponenteCaracteristicasComponent;
  let fixture: ComponentFixture<ComponenteCaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteCaracteristicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
