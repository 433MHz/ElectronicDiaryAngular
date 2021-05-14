import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTopBarComponent } from './third-top-bar.component';

describe('ThirdTopBarComponent', () => {
  let component: ThirdTopBarComponent;
  let fixture: ComponentFixture<ThirdTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
