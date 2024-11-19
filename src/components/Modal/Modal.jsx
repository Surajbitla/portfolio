import React, { useEffect } from 'react';
import './Modal.css';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
