import SignInComponent from './SignIn';

export default {
  component: SignInComponent,
  title: 'SignInComponent',
};

const Template = (args) => <SignInComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
