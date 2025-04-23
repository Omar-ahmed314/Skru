import GameEngine from '../GameEngine/GameEngine';

enum CardType {
  ATTACK = 'Attack',
  DEFENSE = 'Defense',
  SUPPORT = 'Support',
  SPECIAL = 'Special',
}

interface Card {
  value: number;
  type: CardType;
  background_url: string;
  ground_spwappable: boolean;
  visible: boolean;
  apply(Engine: GameEngine): void;
}
