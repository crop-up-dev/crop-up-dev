
import React, { useEffect } from 'react';

const SecondPopup = ({ isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      const disableRightClick = (e) => {
        e.preventDefault();
        return false;
      };

      const disableSelection = (e) => {
        e.preventDefault();
        return false;
      };

      const disableKeyboard = (e) => {
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.shiftKey && e.key === 'C') ||
          (e.ctrlKey && e.key === 'u')
        ) {
          e.preventDefault();
          return false;
        }
      };

      document.addEventListener('contextmenu', disableRightClick);
      document.addEventListener('selectstart', disableSelection);
      document.addEventListener('keydown', disableKeyboard);
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';

      return () => {
        document.removeEventListener('contextmenu', disableRightClick);
        document.removeEventListener('selectstart', disableSelection);
        document.removeEventListener('keydown', disableKeyboard);
        document.body.style.userSelect = '';
        document.body.style.webkitUserSelect = '';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 2147483647
      }}
    >
      <div className="bg-white rounded-lg p-8 max-w-lg mx-4 shadow-2xl border-2 border-red-500 relative">
        <div className="text-center space-y-6">
          <div className="text-3xl font-bold text-red-600 mb-4">
            ⚠️ URGENT NOTICE ⚠️
          </div>
          
          <div className="text-xl font-semibold text-gray-900">
            Your Computer Security is at Risk!
          </div>
          
          <div className="text-gray-700 space-y-3">
            <p>We've detected suspicious activity on your device.</p>
            <p className="font-semibold text-red-600">
              Immediate action required to protect your personal information.
            </p>
          </div>
          
          <div className="bg-red-50 border border-red-200 p-4 rounded">
            <div className="text-sm text-red-800">
              <strong>Security Code:</strong> ERR_SECURITY_WARNING_2024
            </div>
          </div>
          
          <button 
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors"
            onClick={() => {
              console.log('Second popup action clicked');
            }}
          >
            Secure My Device Now
          </button>
          
          <div className="text-xs text-gray-500">
            This popup cannot be closed to ensure your security.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPopup;
