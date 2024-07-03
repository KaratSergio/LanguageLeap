import Icon from '../Icon/Icon';
import InfoPopUp from '../InfoPopUp/InfoPopUp';
import { Teacher } from '@redux/data/data-types';
import useFavoriteTeacher from '@hooks/useFavoriteTeacher';
import { useTheme } from '@hooks/useTheme';

const Header: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  const { bg: backgroundColor } = useTheme();
  const { isFavorite, toggleFavorite, isModalVisible, handleCloseModal } = useFavoriteTeacher(teacher);

  const handleFavoriteClick = () => {
    toggleFavorite();
  };

  return (
    <div className="relative flex items-start font-medium w-full max-w-968 justify-between">
      <div className="flex flex-col">
        <p className="text-mobile text-borderGrey mr-8">Languages</p>
        <h2 className="text-2xl font-medium mt-2">
          {teacher.name} {teacher.surname}
        </h2>
      </div>

      <div className="flex-wrapper flex w-full flex-wrap max-w-[697px] pr-4 items-center justify-between">
        <div className="flex w-full flex-wrap max-w-[607px]  mr-6">
          <div className="flex gap-2 items-center relative pr-4 with-line">
            <Icon id="icon-book" width="w-4" height="h-4" strokeColor="stroke-black" />
            <p>Lessons online</p>
          </div>
          <div className="flex relative px-4 with-line">
            <p>Lessons done: {teacher.lessons_done}</p>
          </div>
          <div className="reverse flex items-center relative px-4 with-line">
            <Icon
              className="mr-2"
              id="icon-star"
              width="w-4"
              height="h-4"
              strokeColor="stroke-yellowStar"
              color="fill-yellowStar"
            />
            <p className="pr-1">Rating: {teacher.rating}</p>
          </div>
          <div className="flex pl-4">
            <p>
              Price/1 hour: <span className="text-green-500">{teacher.price_per_hour}$</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 cursor-pointer mobile-like" onClick={handleFavoriteClick}>
        {isFavorite ? (
          <Icon
            id="icon-like-on"
            width="w-[26px]"
            height="h-[26px]"
            style={{ fill: backgroundColor, stroke: backgroundColor, transition: 'background-color 0.3s' }}
          />
        ) : (
          <Icon id="icon-like-off" width="w-[26px]" height="h-[26px]" strokeColor="stroke-black" />
        )}
        {isModalVisible && <InfoPopUp onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default Header;
