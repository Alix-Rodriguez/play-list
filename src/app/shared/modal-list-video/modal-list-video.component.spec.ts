import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListVideoComponent } from './modal-list-video.component';

describe('ModalListVideoComponent', () => {
  let component: ModalListVideoComponent;
  let fixture: ComponentFixture<ModalListVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalListVideoComponent]
    });
    fixture = TestBed.createComponent(ModalListVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
