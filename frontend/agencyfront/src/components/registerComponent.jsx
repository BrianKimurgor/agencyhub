// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName, updateEmail, updatePassword, toggleAgreedToTerms } from '../features/register/registerSlice';

const Register = () => {
  const dispatch = useDispatch();
  const { name, email, password, agreedToTerms } = useSelector((state) => state.register);

  const handleRegister = () => {
    if (agreedToTerms) {
      console.log({ name, email, password });
      // Dispatch registration action or make an API call here
    } else {
      alert('Please agree to the terms and conditions');
    }
  };

  return (
    <div className="layout-container flex h-full grow flex-col">
      <header className="flex items-center justify-between border-b border-solid border-b-[#E4E9F1] px-10 py-3">
        <div className="flex items-center gap-4 text-[#141C24]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold">Project Tracker</h2>
        </div>
      </header>
      <div className="flex flex-1 justify-center py-5 px-40">
        <div className="layout-content-container flex flex-col w-full max-w-[512px] py-5">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#141C24] text-[32px] font-bold leading-tight min-w-72">Create an account</p>
          </div>
          <div className="flex flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col flex-1">
              <p className="text-base font-medium pb-2">Full name</p>
              <input
                type="text"
                placeholder="John Doe"
                className="form-input flex w-full resize-none rounded-xl h-14 p-[15px] text-base border-[#D4DBE8] bg-[#F8F9FB] focus:outline-0 focus:ring-0"
                value={name}
                onChange={(e) => dispatch(updateName(e.target.value))}
              />
            </label>
          </div>
          <div className="flex flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col flex-1">
              <p className="text-base font-medium pb-2">Work email</p>
              <input
                type="email"
                placeholder="john@acme.com"
                className="form-input flex w-full resize-none rounded-xl h-14 p-[15px] text-base border-[#D4DBE8] bg-[#F8F9FB] focus:outline-0 focus:ring-0"
                value={email}
                onChange={(e) => dispatch(updateEmail(e.target.value))}
              />
            </label>
          </div>
          <div className="flex flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col flex-1">
              <p className="text-base font-medium pb-2">Password</p>
              <input
                type="password"
                placeholder="••••••••••"
                className="form-input flex w-full resize-none rounded-xl h-14 p-[15px] text-base border-[#D4DBE8] bg-[#F8F9FB] focus:outline-0 focus:ring-0"
                value={password}
                onChange={(e) => dispatch(updatePassword(e.target.value))}
              />
            </label>
          </div>
          <div className="px-4">
            <label className="flex gap-x-3 py-3 items-center">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-2 border-[#D4DBE8] bg-transparent text-[#F4C753] focus:ring-0"
                checked={agreedToTerms}
                onChange={() => dispatch(toggleAgreedToTerms())}
              />
              <p className="text-base">I agree to the Terms of Service and Privacy Policy</p>
            </label>
          </div>
          <div className="flex px-4 py-3">
            <button
              className="flex flex-1 h-12 items-center justify-center bg-[#F4C753] text-base font-bold rounded-xl"
              onClick={handleRegister}
            >
              Create account
            </button>
          </div>
          <p className="text-sm text-center">By signing up, you are agreeing to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
