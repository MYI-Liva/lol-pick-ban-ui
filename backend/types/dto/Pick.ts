import { Actionable, Champion, Spell } from './';

export class Pick implements Actionable {
  id: number;
  spell1!: Spell;
  spell2!: Spell;
  champion!: Champion;
  isActive = false;
  displayName = '';
  summonerId = 0;
  accountId = 0;
  puuid = 0;
  constructor(id: number) {
    this.id = id;
  }
}