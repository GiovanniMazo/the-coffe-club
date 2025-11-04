import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './ReviewSystem.css';

const ReviewSystem = ({ productId, initialReviews = [] }) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
    name: ''
  });
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      ...newReview,
      id: Date.now(),
      date: new Date(),
      productId
    };
    setReviews([...reviews, review]);
    setNewReview({ rating: 5, comment: '', name: '' });
    setIsFormOpen(false);
  };

  const averageRating = reviews.length 
    ? (reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length).toFixed(1)
    : 'Sin reseñas';

  return (
    <div className="reviews">
      <div className="reviews__summary">
        <h3>Opiniones de Clientes</h3>
        <div className="reviews__average">
          <span className="reviews__average-number">{averageRating}</span>
          <div className="reviews__stars">
            {[1,2,3,4,5].map(num => (
              <FaStar 
                key={num}
                className={num <= Math.round(averageRating) ? 'star-filled' : 'star-empty'}
              />
            ))}
          </div>
          <span className="reviews__count">({reviews.length} reseñas)</span>
        </div>
      </div>

      <button 
        className="reviews__add-button"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        Escribir una reseña
      </button>

      {isFormOpen && (
        <form onSubmit={handleSubmit} className="reviews__form">
          <div className="reviews__rating-input">
            {[1,2,3,4,5].map(num => (
              <FaStar 
                key={num}
                className={num <= newReview.rating ? 'star-filled' : 'star-empty'}
                onClick={() => setNewReview({...newReview, rating: num})}
              />
            ))}
          </div>
          
          <input
            type="text"
            placeholder="Tu nombre"
            value={newReview.name}
            onChange={(e) => setNewReview({...newReview, name: e.target.value})}
            required
          />
          
          <textarea
            placeholder="Tu opinión"
            value={newReview.comment}
            onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
            required
          />
          
          <button type="submit" className="reviews__submit">
            Publicar reseña
          </button>
        </form>
      )}

      <div className="reviews__list">
        {reviews.map(review => (
          <div key={review.id} className="review">
            <div className="review__header">
              <div className="review__stars">
                {[1,2,3,4,5].map(num => (
                  <FaStar 
                    key={num}
                    className={num <= review.rating ? 'star-filled' : 'star-empty'}
                  />
                ))}
              </div>
              <span className="review__name">{review.name}</span>
              <span className="review__date">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
            <p className="review__comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSystem;