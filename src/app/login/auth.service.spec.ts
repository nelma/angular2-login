import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

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

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: Router, useValue: mockRouter}, AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy(); 
  }));
});
