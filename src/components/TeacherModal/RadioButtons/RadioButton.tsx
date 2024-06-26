import { RadioButtonProps } from '../types';

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, selectedValue, onChange }) => {
  const handleChange = () => {
    if (selectedValue !== value) {
      onChange(value);
    }
  };

  return (
    <label className="flex items-center mb-2 cursor-pointer">
      <input
        type="radio"
        className="opacity-0 absolute"
        value={value}
        checked={selectedValue === value}
        onChange={handleChange}
      />
      <div className="relative flex items-center">
        <div
          className={`w-6 h-6 flex justify-center items-center rounded-full border-2 ${
            selectedValue === value ? 'border-btnColorY bg-white' : 'border-gray-300'
          }`}
        >
          {selectedValue === value && <div className="w-3 h-3 rounded-full bg-btnColorY"></div>}
        </div>
        <span className="ml-2">{label}</span>
      </div>
    </label>
  );
};

export default RadioButton;
