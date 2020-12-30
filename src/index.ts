import dotenv from 'dotenv';
dotenv.config();

import { Message, MessageEmbed, Client } from 'discord.js';
import { COMMAND, ERROR } from './consts';
import { Fetch } from './generator/fetch';

const client = new Client();
const fetcher = new Fetch(process.env.API_KEY as string);

client.once('ready', () => {
  console.log('ready');
});

client.on('message', async msg => {
  if (!msg.content.startsWith(COMMAND.PREFIX)) return;

  const args = msg.content.slice(COMMAND.PREFIX.length).trim().split(' ');
  const command = args.shift()?.toLowerCase();

  if (args.length !== 1) {
    msg.channel.send(`닉네임 포함`);
    return;
  }

  if (command === COMMAND.MATCH_HISTORY) {
    const nickname = args[0];

    try {
      const statsList = await fetcher.getUserStatsByNickname(nickname);

      const embedMessage = new MessageEmbed()
        .setTitle(`블랙서바이벌 전적검색, 블성: ${msg.author.tag}`)
        .setDescription('')
        .setFooter(
          'github@hyp3rflow',
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
        )
        .attachFiles([
          {
            attachment:
              'https://github-readme-solvedac.hyp3rflow.vercel.app/api/png/?handle=hyperflow',
            name: '1.png',
          },
          {
            attachment:
              'https://github-readme-solvedac.hyp3rflow.vercel.app/api/png/?handle=hyperflow',
            name: '2.png',
          },
          {
            attachment:
              'https://github-readme-solvedac.hyp3rflow.vercel.app/api/png/?handle=hyperflow',
            name: '3.png',
          },
        ]);

      msg.channel.send(embedMessage);
    } catch (err) {
      handleError(msg, err);
    }
  }
});

const handleError = (msg: Message, err: Error) => {
  switch (err.message) {
    case ERROR.NO_USERNAME:
      msg.channel.send('유저 이름을 찾을 수 없습니다.');
  }
};

client.login(process.env.BOT_TOKEN);
