
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface DiscountPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiscountPopup = ({ isOpen, onClose }: DiscountPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-2 border-sage-600 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-sage-900 text-center mb-4">
            🌿 Limited Time Offer! 🌿
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <div className="bg-sage-100 p-4 rounded-lg">
            <div className="text-3xl font-bold text-sage-900 mb-2">25% OFF</div>
            <div className="text-sage-700">Your First Order</div>
          </div>
          
          <p className="text-sage-800">
            Experience the power of premium herbal wellness products with our exclusive welcome discount.
          </p>
          
          <div className="space-y-3">
            <Button 
              className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 text-lg"
              onClick={onClose}
            >
              Claim Your Discount
            </Button>
            
            <button 
              onClick={onClose}
              className="text-sm text-sage-600 hover:text-sage-800 underline"
            >
              No thanks, I'll pay full price
            </button>
          </div>
          
          <div className="text-xs text-sage-500 mt-4">
            * Offer valid for new customers only. Limited time offer.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountPopup;
