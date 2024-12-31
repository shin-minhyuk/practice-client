import { createPortal } from 'react-dom';
import { MdCheck } from 'react-icons/md';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Backdrop */}
      <div className='fixed inset-0 bg-black bg-opacity-50' onClick={onClose} />

      {/* Modal */}
      <div className='shadow-custom2 relative z-10 w-96 rounded-lg bg-white p-6'>
        <div className='flex flex-col items-center'>
          <div className='mb-4 rounded-full bg-green-100 p-3'>
            <MdCheck className='h-8 w-8 text-green-600' />
          </div>

          <h2 className='mb-2 text-2xl font-semibold'>로그인 성공!</h2>
          <p className='mb-6 text-center text-gray-600'>환영합니다! 성공적으로 로그인되었습니다.</p>
        </div>
      </div>
    </div>,
    document.body
  );
}
