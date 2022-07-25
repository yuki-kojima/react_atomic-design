import React from "react";
import { action } from '@storybook/addon-actions';
import DeleteButton from ".";
import { withStyle } from '../../utils/decorator';

export default stories => stories
  .add('デフォルト', () => (
    withStyle({ margin: '50px' })(<DeleteButton onClick={ action('削除ボタンがクリックされました')} />)
  ));