"use client";

import { SubmitHandler, useForm } from "react-hook-form";

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

  const handleLogin: SubmitHandler<FormData> = async (data: FormData) => {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const { message } = await response.json();
      alert(message);
    } else {
      setValue("email", "");
      setValue("password", "");
    }
  };

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className='flex'>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className='w-[600px] mx-auto bg-white shadow-custom z-10 relative left-5'
        >
          <div className='w-full flex flex-col p-4'>
            <input
              type='email'
              {...register("email", { required: "이메일은 필수 항목입니다." })}
              placeholder='이메일을 입력해주세요.'
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input
              type='password'
              {...register("password", { required: "비밀번호는 필수 항목입니다." })}
              placeholder='비밀번호를 입력해주세요.'
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button type='submit'>로그인</button>
          </div>
        </form>
        <div className='w-[600px] bg-blue-600 relative right-5 text-center text-white flex justify-center items-center flex-col'>
          <span>
            <strong>WELCOME!</strong> <br />
            Enter your details and start with us
          </span>
          <button>SIGNUP</button>
        </div>
      </div>
    </div>
  );
}
