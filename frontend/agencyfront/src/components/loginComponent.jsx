import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, toggleRememberMe } from '../features/auth/authSlice';


const Auth = () => {
  const dispatch = useDispatch();
  const rememberMe = useSelector((state) => state.auth.rememberMe);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-solid border-b-[#E4E9F1] px-10 py-3">
          <div className="flex items-center gap-4 text-[#141C24]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold">Workbench</h2>
          </div>
          <div className="flex gap-2">
            <button className="flex h-10 items-center justify-center px-4 bg-[#F4C753] text-sm font-bold rounded-xl">Help</button>
            <button className="flex h-10 items-center justify-center px-4 bg-[#E4E9F1] text-sm font-bold rounded-xl">Login</button>
          </div>
        </header>
        <div className="flex flex-1 justify-center py-5 px-40">
          <div className="layout-content-container flex flex-col w-full max-w-[512px] py-5">
            <h3 className="text-2xl font-bold text-center">Welcome to Workbench</h3>
            <p className="text-base text-center">Sign in to your account</p>
            <div className="flex flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col flex-1">
                <p className="text-base font-medium pb-2">Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input flex w-full resize-none rounded-xl h-14 p-[15px] text-base border-[#D4DBE8] bg-[#F8F9FB] focus:outline-0 focus:ring-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="flex flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col flex-1">
                <p className="text-base font-medium pb-2">Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input flex w-full resize-none rounded-xl h-14 p-[15px] text-base border-[#D4DBE8] bg-[#F8F9FB] focus:outline-0 focus:ring-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="px-4">
              <label className="flex gap-x-3 py-3 items-center">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-2 border-[#D4DBE8] bg-transparent text-[#F4C753] focus:ring-0"
                  checked={rememberMe}
                  onChange={() => dispatch(toggleRememberMe())}
                />
                <p className="text-base">Remember Me</p>
              </label>
            </div>
            <p className="text-sm text-center underline">Forgot Password?</p>
            <div className="flex px-4 py-3">
              <button
                className="flex flex-1 h-10 items-center justify-center bg-[#F4C753] text-sm font-bold rounded-xl"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <p className="text-sm text-center">Dont have an account?</p>
            <div className="flex px-4 py-3">
              <button className="flex flex-1 h-10 items-center justify-center bg-[#E4E9F1] text-sm font-bold rounded-xl">
                Start for free
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Auth;
