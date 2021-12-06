import { Story, Meta } from '@storybook/react';
import { InputLabelIcons } from './InputLabelIcons';

export default {
  component: InputLabelIcons,
  title: 'InputLabelIcons',
} as Meta;

const Template: Story = (args) => <InputLabelIcons {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
