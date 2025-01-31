import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInfoPageComponent } from './game-info-page.component';

describe('GameInfoPageComponent', () => {
  let component: GameInfoPageComponent;
  let fixture: ComponentFixture<GameInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameInfoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
