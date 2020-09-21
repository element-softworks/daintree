import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Card, CardProps} from './index'
import {Meta, Story} from '@storybook/react/types-6-0';

import { Page, PageProps } from '../stories/Page';
import {Header} from "../stories/Header";

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'test',
  paragraph: 'Primary',
};

export default {
  title: 'Skipper My Boat / Card',
  component: Card,
} as Meta;
