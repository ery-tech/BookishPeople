import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToTopComponent } from './scroll-to-top.component';
import { of } from 'rxjs';

describe('ScrollToTopComponent', () => {
  let component: ScrollToTopComponent;
  let fixture: ComponentFixture<ScrollToTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollToTopComponent]
    });
    fixture = TestBed.createComponent(ScrollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return windowScrolled true', () => {
    spyOnProperty(document.body, 'scrollTop', 'get').and.returnValue(1000);
    spyOnProperty(document.documentElement, 'scrollTop', 'get').and.returnValue(1000);
    component.onWindowScroll()
    expect(component.windowScrolled).toBeTrue()
  });
  it('should return windowScrolled false', () => {
    document.documentElement.scrollTop = 5
    document.body.scrollTop = 5

    component.onWindowScroll()
    expect(component.windowScrolled).toBeFalse()
  });

});
