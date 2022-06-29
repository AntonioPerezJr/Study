import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMethodsComponent } from './rxjs-methods.component';

describe('RxjsMethodsComponent', () => {
  let component: RxjsMethodsComponent;
  let fixture: ComponentFixture<RxjsMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
