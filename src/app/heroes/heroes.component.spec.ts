import {HeroesComponent} from './heroes.component';
import {of} from 'rxjs/internal/observable/of';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroesService;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful Woman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55},
    ];

    mockHeroesService = jasmine.createSpyObj('HeroService', ['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroesService);
  });

  describe('delete', () => {

    it('should remove the indicated hero from the heroes list', () => {
      mockHeroesService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2);
    });
  });

  it('should call deleteHero', function () {
    mockHeroesService.deleteHero.and.returnValue(of(true));
    component.heroes = HEROES;

    component.delete(HEROES[2]);

    expect(mockHeroesService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
  });
});
