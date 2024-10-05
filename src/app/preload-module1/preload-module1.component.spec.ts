import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadModule1Component } from './preload-module1.component';

describe('PreloadModule1Component', () => {
  let component: PreloadModule1Component;
  let fixture: ComponentFixture<PreloadModule1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreloadModule1Component],
    });
    fixture = TestBed.createComponent(PreloadModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
