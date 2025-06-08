
import { useState, useEffect } from 'react';

export const usePopupManager = () => {
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);

  useEffect(() => {
    // Show first popup after 45 seconds
    const discountTimer = setTimeout(() => {
      setShowDiscountPopup(true);
    }, 45000);

    return () => clearTimeout(discountTimer);
  }, []);

  useEffect(() => {
    // Show second popup 2 seconds after first popup appears
    if (showDiscountPopup) {
      const secondTimer = setTimeout(() => {
        setShowSecondPopup(true);
      }, 2000);

      return () => clearTimeout(secondTimer);
    }
  }, [showDiscountPopup]);

  const closeDiscountPopup = () => {
    setShowDiscountPopup(false);
  };

  return {
    showDiscountPopup,
    showSecondPopup,
    closeDiscountPopup,
    setShowSecondPopup
  };
};
