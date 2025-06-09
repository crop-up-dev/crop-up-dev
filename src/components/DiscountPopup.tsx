
import React, { useEffect } from 'react';

interface DiscountPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiscountPopup = ({ isOpen, onClose }: DiscountPopupProps) => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'closeDiscountPopup') {
        onClose();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <iframe
        src="/discount-popup.html"
        className="w-full h-full border-0"
        title="Limited Time Offer"
      />
    </div>
  );
};

export default DiscountPopup;
