import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBannerComponent } from './template-banner.component';

describe('TemplateBannerComponent', () => {
  let component: TemplateBannerComponent;
  let fixture: ComponentFixture<TemplateBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
