import { Story, Meta } from '@storybook/react';
import { InputIcons } from './InputIcons';

export default {
  component: InputIcons,
  title: 'InputIcons',
} as Meta;

const Template: Story = (args) => <InputIcons {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
