import React, { useState } from 'react';
import RadioButton from './RadioButton';

const RadioButtonGroup: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="mt-10 mob-radio-box">
      <h3 className="mb-5 sm:text-2xl font-medium text-xl">What is your main reason for learning English?</h3>
      <div className="flex flex-col max-w-sm  bg-white ">
        <RadioButton
          label="Career and business"
          value="career_and_business"
          selectedValue={selectedValue}
          onChange={handleChange}
        />
        <RadioButton
          label="Lesson for kids"
          value="lesson_for_kids"
          selectedValue={selectedValue}
          onChange={handleChange}
        />
        <RadioButton
          label="Living abroad"
          value="living_abroad"
          selectedValue={selectedValue}
          onChange={handleChange}
        />
        <RadioButton
          label="Exams and coursework"
          value="exams_and_coursework"
          selectedValue={selectedValue}
          onChange={handleChange}
        />
        <RadioButton
          label="Culture, travel or hobby"
          value="culture_travel_or_hobby"
          selectedValue={selectedValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default RadioButtonGroup;
