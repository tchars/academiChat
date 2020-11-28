import React from 'react';

export const Emoji = ({ aria, emoji }) => {
  return (
    <span role="img" aria-label={aria} aria-labelledby={aria}>
      {emoji}
    </span>
  );
};
