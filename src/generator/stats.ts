import { IStats } from '../interface/IStats';

const processStatsList = (statsList: IStats[]) => {
  statsList.map(stat => processStats(stat));
};

const processStats = (stats: IStats) => {};
