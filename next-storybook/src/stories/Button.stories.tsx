import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Default = () => {
  const content = text('content', 'default');

  return <Button text={content} onClick={() => console.log('test')} />;
};
