import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

addDecorator(withKnobs);

addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'blue', value: '#00aced' },
    { name: 'navy', value: '#3b5998' },
  ],
});

configure(require.context('../src/stories', true, /\.stories\.tsx?$/), module);
