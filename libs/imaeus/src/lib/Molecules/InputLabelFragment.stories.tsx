import { Story, Meta } from '@storybook/react';
import { InputLabelFragment } from './InputLabelFragment';

export default {
  component: InputLabelFragment,
  title: 'InputLabelFragment',
} as Meta;

const Template: Story = (args) => <InputLabelFragment {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
