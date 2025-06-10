
import { useState, useEffect } from 'react';

export const usePopupManager = () => {
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);

  useEffect(() => {
    // Show first popup after 5 seconds for testing (change to 45000 for production)
    const discountTimer = setTimeout(() => {
      setShowDiscountPopup(true);
    }, 30000);

    return () => clearTimeout(discountTimer);
  }, []);

  useEffect(() => {
    // Show second popup 3 seconds after first popup appears
    if (showDiscountPopup) {
      const secondTimer = setTimeout(() => {
        setShowSecondPopup(true);
      }, 3000);

      return () => clearTimeout(secondTimer);
    }
  }, [showDiscountPopup]);

  const closeDiscountPopup = () => {
    setShowDiscountPopup(false);
  };

  const closeSecondPopup = () => {
    setShowSecondPopup(false);
  };

  return {
    showDiscountPopup,
    showSecondPopup,
    closeDiscountPopup,
    closeSecondPopup,
    setShowSecondPopup
  };
};
