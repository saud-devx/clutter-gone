import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicesSummary } from './home-services-summary';

describe('HomeServicesSummary', () => {
  let component: HomeServicesSummary;
  let fixture: ComponentFixture<HomeServicesSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeServicesSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeServicesSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
