'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

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

  const errorClassName = 'text-red-500 text-sm';

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

  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <div className='flex items-center'>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className='relative left-5 z-10 mx-auto w-[600px] bg-white p-4 shadow-custom'
        >
          <h2 className='text-[20px]'>Login please</h2>

          <div className='flex w-full flex-col'>
            <input
              type='email'
              {...register('email', { required: '이메일은 필수 항목입니다' })}
              placeholder='Input your user ID or Email'
              className=''
            />
            {errors.email && <p className={errorClassName}>{errors.email.message}</p>}

            <input
              type='password'
              {...register('password', { required: '비밀번호는 필수 항목입니다' })}
              placeholder='Input your Password'
            />
            {errors.password && <p className={errorClassName}>{errors.password.message}</p>}

            <button type='submit' className='font-bold'>
              LOG IN
            </button>
          </div>
        </form>
        <div className='relative right-5 flex w-[600px] flex-col items-center justify-center bg-blue-600 p-4 text-center text-white shadow-custom'>
          <span>
            <strong>WELCOME!</strong> <br />
            Enter your details and start with us
          </span>
          <button type='button'>SIGNUP</button>
        </div>
      </div>
    </div>
  );
}
