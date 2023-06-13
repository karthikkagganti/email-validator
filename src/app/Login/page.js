'use client'
import { Toaster, toast } from 'react-hot-toast';
import { useState } from 'react';
import { sendMagicLink } from '../utils/api';
import { validateEmail } from '../utils/helpers';

export default function Login() {
  const [email, setEmail] = useState('');

  const sendLink =() =>{
    sendMagicLink(email, null); 
    toast.success(`Please login using the link sent to ${email}`);
    console.log(window.location.origin)
  }
  return (
    <>
      <div className="flex flex-col h-full gap-y-10 w-full bg-white sm:flex-row justify-center items-center">
        <div className='text-black flex flex-col w-full px-3 gap-2 sm:w-1/2 sm:p-8'>
          <h1 className='text-4xl'>Welcome</h1>
          <h2 className='text-sm'>To Access the whitepapers please use your work email...</h2>
        </div>
        <div className="flex justify-center gap-4 w-full sm:w-1/2">
          <form
            className="flex flex-col gap-4 w-3/4 sm: "
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) {
                return toast.error('Please fill all the fields');
              }
//               validateEmail(email?.split('@')[1]) ? toast.error('Please Enter work email') : sendLink();
              sendMagicLink(email, null);
              
            }}
          >
            <div className="">
              <label className="text-gray-700">Email Address</label>
              <input
                type={'email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md w-full p-2 text-black"
                placeholder="Your Email Adress"
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md w-full p-2"
              >
                Login with magic link
              </button>
            </div>
          </form>
        </div>
        <Toaster />
      </div>
    </>
  )
}
