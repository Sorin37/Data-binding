import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingtestComponent } from './bindingtest.component';

describe('BindingtestComponent', () => {
  let component: BindingtestComponent;
  let fixture: ComponentFixture<BindingtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
