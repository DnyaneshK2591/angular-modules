import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadModule2Component } from './preload-module2.component';

describe('PreloadModule2Component', () => {
  let component: PreloadModule2Component;
  let fixture: ComponentFixture<PreloadModule2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreloadModule2Component],
    });
    fixture = TestBed.createComponent(PreloadModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
