import { Story, Meta } from '@storybook/react';
import { View } from './View';

export default {
  component: View,
  title: 'View',
} as Meta;

const Template: Story = (args) => <View {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
