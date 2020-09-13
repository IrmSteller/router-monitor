import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTargetViewComponent } from './service-target-view.component';

describe('ServiceTargetViewComponent', () => {
  let component: ServiceTargetViewComponent;
  let fixture: ComponentFixture<ServiceTargetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTargetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTargetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
