import React from 'react';
import Heading, { HeadingUnderlined } from '.';

export default stories => stories
  .add('デフォルト', () => <Heading>見出し</Heading>)
  .add('レベル1', () => <Heading level={1}>見出しレベル1</Heading>)
  .add('レベル2', () => <Heading level={2}>見出しレベル2</Heading>)
  .add('レベル3', () => <Heading level={3}>見出しレベル3</Heading>)
  .add('レベル4', () => <Heading level={4}>見出しレベル4</Heading>)
  .add('レベル5', () => <Heading level={5}>見出しレベル5</Heading>)
  .add('レベル6', () => <Heading level={6}>見出しレベル6</Heading>)
  .add('レベル1, 見た目2', () => <Heading level={1} visualLevel={2}>見出しレベル1, 見た目2</Heading>)
  .add('下線付き、デフォルト', () => <HeadingUnderlined>見出し</HeadingUnderlined>)
  .add('下線付き、レベル1', () => <HeadingUnderlined level={1}>見出しレベル1</HeadingUnderlined>)
  .add('下線付き、レベル1, 見た目2', () => <HeadingUnderlined level={1} visualLevel={2}>見出しレベル1, 見た目2</HeadingUnderlined>)
