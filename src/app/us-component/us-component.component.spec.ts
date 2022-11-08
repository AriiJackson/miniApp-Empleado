import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsComponentComponent } from './us-component.component';

describe('UsComponentComponent', () => {
  let component: UsComponentComponent;
  let fixture: ComponentFixture<UsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
