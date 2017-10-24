import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosFinacierosComponent } from './estados-finacieros.component';

describe('EstadosFinacierosComponent', () => {
  let component: EstadosFinacierosComponent;
  let fixture: ComponentFixture<EstadosFinacierosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosFinacierosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosFinacierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
