/* eslint-disable no-unused-vars */
import React from 'react';
import LoginForm from './LoginForm';

export default {
  title: 'Auth/LoginForm',
  component: LoginForm,
};

const Template = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onLogin: (data) => alert(`Login data: ${JSON.stringify(data)}`),
};
