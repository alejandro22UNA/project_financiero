import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RCoberturaComponent } from './r-cobertura.component';

describe('RCoberturaComponent', () => {
  let component: RCoberturaComponent;
  let fixture: ComponentFixture<RCoberturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RCoberturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
