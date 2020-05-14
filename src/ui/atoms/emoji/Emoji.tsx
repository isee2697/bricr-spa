import React from 'react';
import emoji from 'react-easy-emoji';

import { EmojiProps } from './Emoji.types';

export const Emoji = ({ children, className }: EmojiProps) => {
  return (
    <span className={className}>
      {emoji(children, {
        baseUrl: 'https://twemoji.maxcdn.com/2/svg/',
        ext: '.svg',
        size: '',
      })}
    </span>
  );
};
