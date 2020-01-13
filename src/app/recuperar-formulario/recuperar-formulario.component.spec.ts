import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarFormularioComponent } from './recuperar-formulario.component';

describe('RecuperarFormularioComponent', () => {
  let component: RecuperarFormularioComponent;
  let fixture: ComponentFixture<RecuperarFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
