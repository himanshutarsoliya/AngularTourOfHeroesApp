import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render Messages in h2 tag', async(() => {
  //   fixture = TestBed.createComponent(MessagesComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h2').textContent).toMatch('Messages');
  // }));

  // it('should render clear in button tag', async(() => {
  //   fixture = TestBed.createComponent(MessagesComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('button').textContent).toMatch('clear');
  // }));
});
