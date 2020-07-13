import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Default = () => {
  const content = text('content', 'default');

  return <Button text={content} onClick={action('clicked')} />;
};

export const Primary = () => {
  const content = text('content', 'primary');

  return <Button text={content} type="primary" onClick={action('clicked')} />;
};

export const Error = () => {
  const content = text('content', 'error');

  return <Button text={content} type="error" onClick={action('clicked')} />;
};

export const Dashed = () => {
  const content = text('content', 'dashed');

  return <Button text={content} type="dashed" onClick={action('clicked')} />;
};
