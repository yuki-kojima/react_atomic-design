import React from "react";
import NotificationList from ".";
import { action } from '@storybook/addon-actions';

const notification = [{
  id: 0,
  thumbnail: '/mock/images/img01.jpg',
  title: 'コンポーネント指向で UI を設計しよう！第1話',
  channelName: 'UI チャンネル',
  startAt: 1507032000000,
  endAt: 1507035600000,
},
{
  id: 1,
  thumbnail: '/mock/images/img02.jpg',
  title: 'コンポーネント指向で UI を設計しよう！第２話',
  channelName: 'UI チャンネル',
  startAt: 1507035600000,
  endAt: 1507039200000,
},
{
  id: 2,
  thumbnail: '/mock/images/img01.jpg',
  title: 'コンポーネント指向で UI を設計しよう！第３話',
  channelName: 'UI チャンネル',
  startAt: 1507032000000,
  endAt: 1507035600000,
},
{
  id: 3,
  thumbnail: '/mock/images/img02.jpg',
  title: 'コンポーネント指向で UI を設計しよう！第４話',
  channelName: 'UI チャンネル',
  startAt: 1507035600000,
  endAt: 1507039200000,
}];

export default stories => stories
  .add('デフォルト', () => (
    <NotificationList programs={notification} onClickDelete={ action("削除ボタンがクリックされました") } />
  ));