import { Teacher, Review } from '@redux/data/data-types';
import Icon from '../Icon/Icon';

const Reviews: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  return (
    <>
      {teacher.reviews.map((review: Review, reviewIndex: number) => (
        <div key={reviewIndex} className="flex text-mob-size flex-col mb-8 font-medium">
          <div className="flex mb-4 gap-3">
            <img
              src={review.reviewer_avatar_url}
              alt={review.reviewer_name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-borderGrey">{review.reviewer_name}</p>
              <div className="flex items-center gap-2">
                <Icon
                  id="icon-star"
                  width="w-4"
                  height="h-4"
                  color="fill-yellowStar"
                  strokeColor="stroke-yellowStar"
                />
                <p className="text-sm">{review.reviewer_rating.toFixed(1)}</p>
              </div>
            </div>
          </div>
          <p>{review.comment} </p>
        </div>
      ))}
    </>
  );
};

export default Reviews;
