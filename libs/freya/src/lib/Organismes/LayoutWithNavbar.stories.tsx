import { Story, Meta } from '@storybook/react';
import { LayoutWithNavbar } from './LayoutWithNavbar';

export default {
  component: LayoutWithNavbar,
  title: 'LayoutWithNavbar',
} as Meta;

const Template: Story = (args) => <LayoutWithNavbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
