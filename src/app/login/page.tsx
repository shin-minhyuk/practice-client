'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TfiEmail } from 'react-icons/tfi';
import { RiLockPasswordLine } from 'react-icons/ri';

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<FormData>();
  const [checked, setChecked] = useState<boolean>(false);

  const errorClassName = 'text-red-500 text-sm font-semibold';
  const inputClassName = 'shadow-custom2 w-full rounded-lg py-4 pl-16 pr-3 focus:placeholder-transparent';

  const handleLogin: SubmitHandler<FormData> = async (data: FormData) => {
    const response = await fetch('http://localhost:3010/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const { message } = await response.json();
      alert(message);
    } else {
      setValue('email', '');
      setValue('password', '');
    }
  };

  const handleChange = () => setChecked(!checked);

  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      {/* Login Form Section */}
      <div className='relative left-5 z-10 flex w-full max-w-[600px] rounded-xl bg-white px-20 shadow-custom'>
        <div className='w-full'>
          <h2 className='py-12 text-center text-2xl font-semibold underline'>Login please</h2>

          <form onSubmit={handleSubmit(handleLogin)} className='space-y-6'>
            <div className='space-y-2'>
              <div className='relative'>
                <div className='absolute left-0 top-1/2 h-full w-1 -translate-y-1/2 rounded-l-full bg-blue-600' />
                <TfiEmail className='absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400' />
                <input
                  type='email'
                  {...register('email', { required: '이메일은 필수 항목입니다' })}
                  placeholder='|   Input your user ID or Email'
                  className={inputClassName}
                  autoComplete='off'
                />
              </div>
              {errors.email && <p className={errorClassName}>{errors.email.message}</p>}
            </div>

            <div className='space-y-2'>
              <div className='relative'>
                <div className='absolute left-0 top-1/2 h-full w-1 -translate-y-1/2 rounded-l-full bg-blue-600' />
                <RiLockPasswordLine className='absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400' />
                <input
                  type='password'
                  {...register('password', { required: '비밀번호는 필수 항목입니다' })}
                  placeholder='|   Input your Password'
                  className={inputClassName}
                />
              </div>
              {errors.password && <p className={errorClassName}>{errors.password.message}</p>}
            </div>

            <div className='flex items-center justify-between py-6'>
              <label className='flex cursor-pointer items-center'>
                {/* 숨겨진 기본 체크박스 */}
                <input type='checkbox' checked={checked} onChange={handleChange} className='hidden' />
                {/* 커스텀 체크박스 */}
                <span
                  className={`mr-4 flex h-5 w-5 items-center justify-center rounded border-2 border-gray-400 transition-colors duration-500 ${
                    checked ? 'border-blue-600 bg-blue-600' : 'bg-white'
                  }`}
                >
                  {checked && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-4 w-4'
                    >
                      <path d='M20 6L9 17l-5-5' />
                    </svg>
                  )}
                </span>
                Remember me
              </label>
              <Link
                href='/auth/forgot-password'
                className='underline transition-colors duration-500 hover:text-blue-600'
              >
                Forgot Password?
              </Link>
            </div>
            <div className='pb-12 text-center'>
              <button
                type='submit'
                className='rounded-lg bg-blue-900 px-10 py-2 font-bold text-white transition-colors duration-300 hover:bg-blue-600'
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Welcome Section */}
      <div className='relative right-5 hidden h-[60vh] w-full max-w-[600px] rounded-xl bg-blue-600 shadow-custom lg:block'>
        <div className='relative flex h-full flex-col items-center justify-center p-12 text-center text-white'>
          <h1 className='mb-4 text-4xl font-bold'>WELCOME!</h1>
          <p className='mb-8 text-lg'>Enter your details and start with us</p>
          <Link
            href='/auth/register'
            className='rounded-lg bg-blue-900 px-10 py-2 font-semibold text-white transition-colors duration-500 hover:bg-blue-800'
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}
