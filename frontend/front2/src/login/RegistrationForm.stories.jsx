/* eslint-disable no-unused-vars */
import React from 'react';
import RegisterForm from './RegistrationForm';

export default {
    title: 'Auth/RegistrationForm',
    component: RegisterForm,
};

const Template = (args) => <RegisterForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onRegister: (data) => alert(`RegisterData data: ${JSON.stringify(data)}`),
};
