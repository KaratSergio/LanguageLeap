import React from 'react';
import { BeatLoader } from 'react-spinners';

interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <div className="spinner-container">
      <BeatLoader color="#36D7B7" loading={loading} size={15} />
    </div>
  );
};

export default Spinner;
