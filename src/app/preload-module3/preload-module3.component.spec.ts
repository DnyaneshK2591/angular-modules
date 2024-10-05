import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadModule3Component } from './preload-module3.component';

describe('PreloadModule3Component', () => {
  let component: PreloadModule3Component;
  let fixture: ComponentFixture<PreloadModule3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreloadModule3Component],
    });
    fixture = TestBed.createComponent(PreloadModule3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
