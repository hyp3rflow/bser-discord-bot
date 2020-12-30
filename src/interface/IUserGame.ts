export interface IUserGame {
  userNum: number;
  nickname: string;
  gameId: number;
  seasonId: number;
  matchingMode: number;
  matchingTeamMode: number;
  characterNum: number;
  characterLevel: number;
  gameRank: number;
  playerKill: number;
  playerAssistant: number;
  monsterKill: number;
  bestWeapon: number;
  bestWeaponLevel: number;
  masteryLevel: MasteryLevel;
  equipment: Equipment;
  versionMajor: number;
  versionMinor: number;
  skillLevelInfo: SkillLevelInfo;
  skillOrderInfo: SkillOrderInfo;
  maxHp: number;
  maxSp: number;
  attackPower: number;
  defense: number;
  hpRegen: number;
  spRegen: number;
  attackSpeed: number;
  moveSpeed: number;
  outOfCombatMoveSpeed: number;
  sightRange: number;
  attackRange: number;
  criticalStrikeChance: number;
  criticalStrikeDamage: number;
  coolDownReduction: number;
  lifeSteal: number;
  amplifierToMonster: number;
  trapDamage: number;
  gainExp: number;
  startDtm: string;
  duration: number;
  mmrBefore: number;
  damageToPlayer: number;
  damageToMonster: number;
  killerUserNum: number;
  playTime: number;
  watchTime: number;
  totalTime: number;
  botAdded: number;
  botRemain: number;
  restrictedAreaAccelerated: number;
  safeAreas: number;
  killer: string;
  killDetail: string;
  causeOfDeath: string;
  teamNumber: number;
  preMade: number;
  gainedNormalMmrKFactor: number;
}

interface SkillOrderInfo {
  [key: string]: number;
}

interface SkillLevelInfo {
  [key: string]: number;
}

interface Equipment {
  [key: string]: number;
}

interface MasteryLevel {
  [key: string]: number;
}
