import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeContatosComponent } from './lista-de-contatos.component';

describe('ListaDeContatosComponent', () => {
  let component: ListaDeContatosComponent;
  let fixture: ComponentFixture<ListaDeContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeContatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
