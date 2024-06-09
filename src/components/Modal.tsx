import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
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
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute flex justify-center items-center top-5 right-5 text-4xl h-8 w-8"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
