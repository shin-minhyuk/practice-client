"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 7000);
  }, [router]);

  return (
    <div className='flex h-[100vh] w-full items-center justify-center'>
      <div className='mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white shadow-lg'>
        <div className='p-6'>
          <div className='mb-4 flex items-center space-x-4'>
            <div className='animate-pulse rounded-full bg-blue-500 p-2'></div>
            <h2 className='text-2xl font-bold text-blue-600'>홈페이지 안내</h2>
          </div>
          <p className='mb-4 text-gray-600'>
            잠시 후 로그인 페이지로 이동합니다. <br />
          </p>
          <div className='flex items-center space-x-2 text-sm text-blue-500'>
            <span>곧 사이트가 리뉴얼 될 예정이니 많은 기대 부탁드립니다.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
