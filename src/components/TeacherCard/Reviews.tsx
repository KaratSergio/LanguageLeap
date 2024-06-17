import { Teacher, Review } from '@redux/data/data-types';

const Reviews: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  return (
    <div>
      <h3 className="text-lg font-bold">Reviews:</h3>
      {teacher.reviews.map((review: Review, reviewIndex: number) => (
        <div key={reviewIndex} className="pl-4 mb-8">
          <p>
            <strong>{review.reviewer_name}:</strong> {review.comment} (Rating:{' '}
            {review.reviewer_rating})
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
