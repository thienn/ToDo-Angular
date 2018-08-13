import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNoneComponent } from './item-none.component';

describe('ItemNoneComponent', () => {
  let component: ItemNoneComponent;
  let fixture: ComponentFixture<ItemNoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
