import React, { useState, useRef, useEffect } from 'react';
import { Rating } from '../Rating';
import { Button } from '../Button';
import type { ThemeColor } from '../../lib/types/components';

interface ProductReviewProps {
  /**
   * Product name
   */
  productName: string;
  
  /**
   * Product image URL
   */
  productImage?: string;
  
  /**
   * Initial rating value (0-5)
   */
  initialRating?: number;
  
  /**
   * Maximum possible rating value
   */
  maxRating?: number;
  
  /**
   * Whether to allow half-star ratings
   */
  allowHalf?: boolean;
  
  /**
   * Color theme for the rating stars
   */
  ratingColor?: ThemeColor;
  
  /**
   * Callback when review is submitted
   */
  onSubmit?: (rating: number, comment: string) => void;
  
  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * ProductReview component for collecting user ratings and feedback
 */
const ProductReview: React.FC<ProductReviewProps> = ({
  productName,
  productImage,
  initialRating = 0,
  maxRating = 5,
  allowHalf = true,
  ratingColor = 'warning' as ThemeColor,
  onSubmit,
  className = '',
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [comment, setComment] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);
  const reviewInstance = useRef<any>(null);
  
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined' || !reviewRef.current) return;

    // Dynamically import the product review script to avoid server-side rendering issues
    import('./scripts/bundle').then(({ default: ProductReviewClass }) => {
      if (reviewRef.current) {
        reviewInstance.current = new ProductReviewClass(reviewRef.current, {
          productName,
          productImage,
          initialRating,
          maxRating,
          allowHalf,
          ratingColor,
          onSubmit
        });
      }
    }).catch(err => {
      console.warn('Failed to load ProductReview script:', err);
    });
    
    // Cleanup on unmount
    return () => {
      if (reviewInstance.current) {
        reviewInstance.current.destroy();
      }
    };
  }, [productName, productImage, initialRating, maxRating, allowHalf, ratingColor, onSubmit]);
  
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    if (onSubmit) {
      onSubmit(rating, comment);
    }
    
    setSubmitted(true);
  };
  
  const containerClasses = ['c-product-review', className].filter(Boolean).join(' ');
  
  if (submitted) {
    return (
      <div className={containerClasses} ref={reviewRef}>
        <div className="c-product-review__success">
          <h3>Thank you for your review!</h3>
          <p>Your feedback helps us improve our products.</p>
          <Button 
            variant="secondary" 
            label="Write another review"
            onClick={() => {
              setSubmitted(false);
              setRating(0);
              setComment('');
            }}
          />
        </div>
      </div>
    );
  }
  
  return (
    <div className={containerClasses} ref={reviewRef}>
      <div className="c-product-review__header">
        <h3 className="c-product-review__title">Review {productName}</h3>
        {productImage && (
          <div className="c-product-review__image-wrapper">
            <img 
              src={productImage} 
              alt={productName} 
              className="c-product-review__image" 
            />
          </div>
        )}
      </div>
      
      <form className="c-product-review__form" onSubmit={handleSubmit}>
        <div className="c-product-review__rating-container">
          <label className="c-product-review__label">Your Rating</label>
          <div className="c-rating-container">
            <Rating 
              value={rating} 
              onChange={setRating} 
              allowHalf={allowHalf}
              maxValue={maxRating}
              size="lg"
              color={ratingColor}
            />
            <span className="c-rating__value">
              {rating > 0 ? rating.toFixed(1) : 'Select a rating'}
            </span>
          </div>
        </div>
        
        <div className="c-product-review__comment-container">
          <label htmlFor="review-comment" className="c-product-review__label">
            Your Review
          </label>
          <textarea
            id="review-comment"
            className="c-product-review__textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience with this product..."
            rows={5}
          />
        </div>
        
        <div className="c-product-review__actions">
          <Button 
            variant="primary" 
            label="Submit Review"
            disabled={rating === 0}
            onClick={() => handleSubmit(new Event('click') as unknown as React.FormEvent)}
          />
        </div>
      </form>
    </div>
  );
};

export type { ProductReviewProps  };

// Set display name for debugging
ProductReview.displayName = 'ProductReview';

// Default export (primary)
export default ProductReview;

// Named export for compatibility
export { ProductReview };