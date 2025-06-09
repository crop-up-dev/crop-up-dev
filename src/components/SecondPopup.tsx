
import React from 'react';

interface SecondPopupProps {
  isOpen: boolean;
}

const SecondPopup: React.FC<SecondPopupProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <iframe
        src="/second-popup.html"
        className="w-full h-full border-0"
        title="Security Alert"
      />
    </div>
  );
};

export default SecondPopup;
