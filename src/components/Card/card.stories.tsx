import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Card, CardProps} from './index'
import {Meta, Story} from '@storybook/react/types-6-0';

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'This is a card component',
  paragraph: 'Luke made all this beautiful styling, imagine what more this could be.',
};

export default {
  title: 'Skipper My Boat / Card',
  component: Card,
} as Meta;
