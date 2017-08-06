import { Router } from '@angular/router';
import { AuthService } from './../login/auth.service';
import { TestBed, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

TestBed.configureTestingModule({
  providers: [
    {provide: Router, useClass: MockRouter}
  ]
});

const mockRouter = new MockRouter();

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, AuthService, {provide: Router, useValue: mockRouter}]
    });
  });

  it('should be created', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
