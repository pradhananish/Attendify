import React from 'react';
import Navbar from '../../components/Navbar';

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar />
      <div className="flex flex-1 flex-row" style={{ backgroundColor: '#EDF1F7' }}>
        <div className="flex w-1/2 justify-center items-start gap-3 px-10 flex-col">
          <h1 className="text-5xl" style={{ color: '#212529' }}>Attendance</h1>
          <h1 className="text-5xl mb-6" style={{ color: '#4154F1' }}>for Kathmandu University</h1>
          <p className="text-base" style={{ color: '#757F8E' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, itaque accusantium
            odio, soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>
        
        <div className="flex w-1/2 justify-center items-center">
          <div className="flex flex-col h-3/4 bg-white w-3/4 justify-center px-8 gap-5 rounded">
            <div className="flex flex-row gap-5">
              {['Student'].map((role, index) => (
                <div
                  key={index}
                  className="p-2 px-5 rounded-lg border border-blue-500 flex justify-center items-center gap-2"
                  style={{ backgroundColor: '#F0F4FB' }}
                >
                  <input type="checkbox" />
                  <span className="text-sm" style={{ color: '#3C4EF1' }}>
                    {role}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-sm" style={{ color: '#212529' }}>
                Username
              </label>
              <input
                className="border p-2 text-sm"
                type="text"
                name="username"
                id="username"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm" style={{ color: '#212529' }}>
                Password
              </label>
              <input
                className="border p-2 text-sm"
                type="password"
                name="password"
                id="password"
              />
            </div>
            
            <div className="flex flex-row gap-1 items-center">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>
            
            <div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center"
                style={{ backgroundColor: '#4154F1' }}
              >
                Sign In
              </button>
            </div>
            
            <div className="text-xs" style={{ color: '#6C757D' }}>
              Forgot password?
            </div>
            
            <div className="text-sm" style={{ color: '#212529' }}>
              Don't have an account?{' '}
              <span className="text-sm" style={{ color: '#0DCAF0' }}>
                Register here
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
