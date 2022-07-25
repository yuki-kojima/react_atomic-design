import React from 'react';
import { action } from '@storybook/addon-actions'
import { TrashCanIcon, ChevronRightIcon, SearchIcon, SettingsIcon } from '.';

export default stories => stories
  .add('TrashCanIcon', () => <TrashCanIcon />)
  .add('TrashCanIcon クリッカブル', () => <TrashCanIcon onClick={ action('アイコンがクリックされました') }/>)
  .add('ChevronRightIcon', () => <ChevronRightIcon />)
  .add('ChevronRightIcon クリッカブル', () => <ChevronRightIcon onClick={ action('アイコンがクリックされました') }/>)
  .add('SearchIcon', () => <SearchIcon />)
  .add('SearchIcon クリッカブル', () => <SearchIcon onClick={ action('アイコンがクリックされました') }/>)
  .add('SettingsIcon', () => <SettingsIcon />)
  .add('SettingsIcon クリッカブル', () => <SettingsIcon onClick={ action('アイコンがクリックされました') }/>)

