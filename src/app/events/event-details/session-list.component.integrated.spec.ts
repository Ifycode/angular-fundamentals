import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { SessionListComponent } from "./session-list.component";
import { AuthService } from "src/app/user/auth.service";
import { VoterService } from "./voter.service";
import { DurationPipe } from "../shared";
import { CollapsibleWellComponent } from "src/app/common";
//import Issession & By later when you need them

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
      component: SessionListComponent,
      element: HTMLElement,
      debugEl: DebugElement;

  beforeEach(async(() => {
    let mockAuthService = {};
    let mockVoterService = {};

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        DurationPipe,
        CollapsibleWellComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: []
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('Initial display', () => {
    it('should have the correct session title', () => {
      component.sessions = [
        {
          id: 3,
          name: 'Session 1',
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'bob']
        }
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();

      fixture.detectChanges();

      expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
    });
  });
});
