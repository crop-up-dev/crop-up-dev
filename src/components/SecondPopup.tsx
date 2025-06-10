
import React from 'react';

interface SecondPopupProps {
  isOpen: boolean;
}

const SecondPopup = ({ isOpen }: SecondPopupProps) => {
  if (!isOpen) return null;

  return (
    <iframe
      src="/src/components/SecondPopup.html"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        zIndex: 2147483647
      }}
      title="Security Warning"
    />
  );
};

export default SecondPopup;
