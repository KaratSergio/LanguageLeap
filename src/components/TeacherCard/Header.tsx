import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import { Teacher } from '@redux/data/data-types';
import useFavoriteTeacher from '@hooks/useFavoriteTeacher';
import InfoPopUp from '../InfoPopUp/InfoPopUp';

const Header: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  const { isFavorite, toggleFavorite } = useFavoriteTeacher(teacher);
  const [isInfoPopUpVisible, setIsInfoPopUpVisible] = useState(false);

  const handleFavoriteClick = () => {
    if (!isFavorite) {
      setIsInfoPopUpVisible(true);
    } else {
      toggleFavorite();
    }
  };

  const handleCloseInfoPopUp = () => {
    setIsInfoPopUpVisible(false);
  };

  return (
    <div className="flex font-medium w-[968px] justify-between">
      <div className="flex flex-col">
        <p className="text-borderGrey">Languages</p>
      </div>
      <div className="flex w-[697px] justify-between">
        <div className="flex w-[607px] justify-center">
          <div className="flex gap-2 items-center relative pr-4 with-line">
            <Icon id="icon-book" width="w-4" height="h-4" strokeColor="stroke-black" />
            <p>Lessons online</p>
          </div>
          <div className="flex relative px-4 with-line">
            <p>Lessons done: {teacher.lessons_done}</p>
          </div>
          <div className="flex gap-2 items-center relative px-4 with-line">
            <Icon
              id="icon-star"
              width="w-4"
              height="h-4"
              strokeColor="stroke-yellowStar"
              color="fill-yellowStar"
            />
            <p>Rating: {teacher.rating}</p>
          </div>
          <p className="pl-4">
            Price/1 hour: <span className="text-green-500">{teacher.price_per_hour}$</span>
          </p>
        </div>
        <div className="cursor-pointer" onClick={handleFavoriteClick}>
          {isFavorite ? (
            <Icon
              id="icon-like-on"
              width="w-[26px]"
              color="fill-btnColorY"
              strokeColor="stroke-btnColorY"
            />
          ) : (
            <Icon id="icon-like-off" width="w-[26px]" strokeColor="stroke-black" />
          )}
        </div>
      </div>
      {isInfoPopUpVisible && <InfoPopUp onClose={handleCloseInfoPopUp} />}
    </div>
  );
};

export default Header;
