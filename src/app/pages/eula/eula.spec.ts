import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eula } from './eula';

describe('Eula', () => {
  let component: Eula;
  let fixture: ComponentFixture<Eula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eula]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eula);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
