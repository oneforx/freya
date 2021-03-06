import { Story, Meta } from '@storybook/react';
import { InputLabel, InputLabelProps } from './InputLabel';

export default {
  component: InputLabel,
  title: 'InputLabel',
} as Meta;

const Template: Story<InputLabelProps> = (args) => <InputLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
