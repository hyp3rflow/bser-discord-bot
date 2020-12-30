import { IStats } from '../interface/IStats';
import { IUserGame } from '../interface/IUserGame';

export const processStatsList = (userStatsList: IStats[]) => {
  const mmrArray = [0, 0, 0];
  userStatsList.forEach(userStat => {
    mmrArray[userStat.matchingTeamMode - 1] = userStat.mmr;
  });

  return mmrArray;
};

export interface IHistory {
  gameRank: number;
  characterNum: number;
  characterLevel: number;
  playerKill: number;
  matchingMode: number;
  matchingTeamMode: number;
  timestamp: string;
}

export const processUserGames = (userGames: IUserGame[]) => {
  const rankArray: number[] = [];
  const historyArray: IHistory[] = [];
  userGames.forEach(userGame => {
    rankArray.push(userGame.gameRank);
    if (historyArray.length < 3) {
      historyArray.push({
        gameRank: userGame.gameRank,
        characterNum: userGame.characterNum,
        characterLevel: userGame.characterLevel,
        playerKill: userGame.playerKill,
        matchingMode: userGame.matchingMode,
        matchingTeamMode: userGame.matchingTeamMode,
        timestamp: userGame.startDtm,
      });
    }
  });

  return { rankArray, historyArray };
};
