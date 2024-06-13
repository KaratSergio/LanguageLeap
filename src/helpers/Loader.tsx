import React from 'react';
import { BeatLoader } from 'react-spinners';

const Loader: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <div className="spinner-container px-1">
      <BeatLoader color="#36D7B7" loading={loading} size={15} />
    </div>
  );
};

export default Loader;
