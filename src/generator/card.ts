import puppeteer from 'puppeteer';
import { IHistory } from './process';

interface ICardProp {
  nickname: string;
  mmrArray: number[];
  rankArray: number[];
  historyArray: IHistory[];
}

export class Card {
  cardctx: string = '';
  tier = [
    '아이언',
    '브론즈',
    '실버',
    '골드',
    '플래티넘',
    '다이아몬드',
    '데미갓',
    '이터니티',
  ];

  matchType = ['노말', '랭크'];
  gameType = ['솔로', '듀오', '스쿼드'];
  character = [
    '-',
    '재키',
    '아야',
    '피오라',
    '매그너스',
    '자이르',
    '나딘',
    '현우',
    '하트',
    '아이솔',
    '리 다이린',
    '유키',
    '혜진',
    '쇼우',
    '키아라',
    '시셀라',
    '실비아',
    '아드리아나',
    '쇼이치',
    '엠마',
  ];

  constructor(prop: ICardProp) {
    console.log('construct image...');
    this.cardctx = `<html>
  <head>
    <style>
      @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&amp;display=swap');

      * {
        font-family: Noto Sans CJK KR, 'Inter', 'Noto Sans KR', sans-serif;
        color: #dee2e6;
      }

      body {
        width: 800px;
        margin: 0;
      }

      text {
        fill: black;
      }

      .background {
        position: absolute;
        border-radius: 5px;
        z-index: -1;
      }

      .nickname {
        font-size: 40px;
        color: #f8f9fa;
        font-weight: 500;
      }

      .row-flex {
        display: flex;
        align-items: center;
      }

      .champion {
        filter: drop-shadow(rgba(222, 226, 230, 0.4) 0px 4px 8px);
        margin-right: 20px;
        border-radius: 50%;
      }

      .profile {
        margin-bottom: 50px;
      }

      .profile-box {
        position: relative;
        top: 20px;
        left: 20px;
      }

      .rating-card {
        margin-left: 20px;
      }

      .rank-img {
        width: 70px;
        height: 70px;
      }

      .img-type-box {
        margin-right: 15px;
      }

      .mmr-box {
        margin-bottom: 10px;
        padding: 15px;
        background-color: rgba(52, 58, 64, 0.5);
        border-radius: 10px;
        width: 250px;
      }

      .rating {
        font-size: 50px;
        font-weight: 600;
      }

      .type {
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        margin-bottom: 10px;
      }

      .place {
        width: 30px;
        height: 30px;
        background-color: rgba(52, 58, 64, 0.5);
        vertical-align: middle;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;

        font-size: 20px;
        margin-right: 10px;
        color: #ced4da;
      }

      .place-label {
        margin-right: 12px;
      }

      .history {
        margin-bottom: 6px;
        margin-left: 15px;
      }

      .matchCard {
        margin-top: 10px;
        width: 467px;
        height: 125px;

        background-color: rgba(52, 58, 64, 0.5);

        border-radius: 10px;
      }

      .match-meta {
        width: 70px;
        margin: auto 10px;

      }
      
      .info {
        text-align: center;
      }

      .champion-avatar {
        border-radius: 50%;
        width: 70px;
      }

      .match-champion {
        width: 70px;
        margin: auto 10px;
      }

      .match-info {
        width: 40px;
        margin: auto 5px;
      }
    </style>
  </head>
  <body>
    <img class="background" src="https://raw.githubusercontent.com/hyp3rflow/bser-discord-bot/main/assets/background.png" />

    <div class="profile">
      <div class="row-flex profile-box">
        <img
          class="champion"
          src="https://dak.gg/bser/images/assets/character/community/003.png"
        />
        <div class="nickname">${prop.nickname}</div>
      </div>
    </div>
    <div class="row-flex">
      <div class="rating-card">
        <div class="col-flex">
          <div class="row-flex mmr-box">
            <div class="col-flex img-type-box">
              <div class="type">솔로</div>
              <img
                class="rank-img"
                src="https://dak.gg/bser/images/assets/tier/round/${Math.floor(
                  prop.mmrArray[0] / 400 + 1
                )}.png"
              />
            </div>
            <div class="col-flex">
              <div class="rating">${prop.mmrArray[0]}</div>
              <div class="season">${
                this.tier[Math.floor(prop.mmrArray[0] / 400)]
              } ${4 - Math.floor((prop.mmrArray[0] % 400) / 100)} - ${
      prop.mmrArray[0] % 100
    }LP</div>
            </div>
          </div>
          <div class="row-flex mmr-box">
            <div class="col-flex img-type-box">
              <div class="type">두오</div>
              <img
                class="rank-img"
                src="https://dak.gg/bser/images/assets/tier/round/${
                  Math.floor(prop.mmrArray[1] / 400) + 1
                }.png"
              />
            </div>
            <div class="col-flex">
              <div class="rating">${prop.mmrArray[1]}</div>
              <div class="season">${
                this.tier[Math.floor(prop.mmrArray[1] / 400)]
              } ${4 - Math.floor((prop.mmrArray[1] % 400) / 100)} - ${
      prop.mmrArray[1] % 100
    }LP</div>
            </div>
          </div>
          <div class="row-flex mmr-box">
            <div class="col-flex img-type-box">
              <div class="type">스까드</div>
              <img
                class="rank-img"
                src="https://dak.gg/bser/images/assets/tier/round/${
                  Math.floor(prop.mmrArray[2] / 400) + 1
                }.png"
              />
            </div>
            <div class="col-flex">
              <div class="rating">${prop.mmrArray[2]}</div>
              <div class="season">${
                this.tier[Math.floor(prop.mmrArray[2] / 400)]
              } ${4 - Math.floor((prop.mmrArray[2] % 400) / 100)} - ${
      prop.mmrArray[2] % 100
    }LP</div>
            </div>
          </div>
        </div>
      </div>
      <div class="history">
        <div class="recent-place">
          <div class="row-flex">
            <div class="place-label">최근 10판</div>
            ${prop.rankArray
              .map(place => `<div class="place">${place}</div>`)
              .join('')}
          </div>
        </div>
        <div class="matchlist">
          ${prop.historyArray
            .map(
              history => `<div class="matchCard row-flex">
            <div class="match-meta">
              <div class="info">${
                this.gameType[history.matchingTeamMode - 1]
              } ${this.matchType[history.matchingMode - 2]}</div>
              <div class="info">#${history.gameRank}</div>
              <div class="info">2시간 전</div>
            </div>
            <div class="match-champion">
              <img class="champion-avatar"
                src="https://dak.gg/bser/images/assets/character/community/${history.characterNum
                  .toString()
                  .padStart(3, '0')}.png"
              />
              <div class="info">${this.character[history.characterNum]}</div>
            </div>
            <div class="match-info">
              <div class="info">킬</div>
              <div class="info">${history.playerKill}</div>
            </div>
            <div class="match-info">
              <div class="info">레벨</div>
              <div class="info">${history.characterLevel}</div>
            </div>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </div>
  </body>
</html>
`;
  }

  render = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(this.cardctx);
    page.setViewport({ width: 800, height: 600 });
    const png = await page.screenshot({ omitBackground: true });

    browser.close();

    return png;
  };
}
