import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';


class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

TestBed.configureTestingModule({
  providers: [
    {provide: Router, useClass: MockRouter}
  ]
});

const mockRouter = new MockRouter();


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ LoginComponent ],
      providers: [ AuthService, {provide: Router, useValue: mockRouter} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
