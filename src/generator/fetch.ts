import fetch from 'node-fetch';
import { ERROR } from '../consts';

const { API_HOST } = process.env;

export class Fetch {
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  fetchWrapper = async (url: string) => {
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': this.apiKey,
      },
    });

    const jsonData = await data.json();
    return jsonData;
  };

  getUserNum = async (nickname: string) => {
    const query = `${API_HOST}/user/nickname?query=${encodeURI(nickname)}`;

    const data = await this.fetchWrapper(query);

    if (data.code !== 200) {
      throw new Error(ERROR.NO_USERNAME);
    }

    return data.user.userNum;
  };

  getUserStats = async (userNum: number, seasonId: number = 0) => {
    const query = `${API_HOST}/user/stats/${userNum}/${seasonId}`;
    const data = await this.fetchWrapper(query);

    if (data.code !== 200) {
      throw new Error(data.message);
    }

    return data.userStats;
  };

  getUserStatsByNickname = async (nickname: string) => {
    const userNum = await this.getUserNum(nickname);
    const statsList = await this.getUserStats(userNum);

    return statsList;
  };
}
