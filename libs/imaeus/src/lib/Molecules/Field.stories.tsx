import { Story, Meta } from '@storybook/react';
import { Field } from './Field';

export default {
  component: Field,
  title: 'Field',
} as Meta;

const Template: Story = (args) => <Field {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
