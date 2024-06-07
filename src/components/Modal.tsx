import React, { useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import 'tailwindcss/tailwind.css';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
      onClick={onClose}
    >
      <div className="bg-white p-4 rounded" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
