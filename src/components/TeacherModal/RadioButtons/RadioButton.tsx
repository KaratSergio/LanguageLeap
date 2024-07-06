import { RadioButtonProps } from '../types';
import { useTheme } from '@hooks/useTheme';

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, selectedValue, onChange }) => {
  const { bg: backgroundColor } = useTheme();

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
          className="w-6 h-6 flex justify-center items-center rounded-full  border-2"
          style={{
            borderColor: selectedValue === value ? backgroundColor : '',
            backgroundColor: selectedValue === value ? 'white' : '',
          }}
        >
          {selectedValue === value && <div className="w-3 h-3 rounded-full" style={{ backgroundColor }}></div>}
        </div>
        <span className="ml-2">{label}</span>
      </div>
    </label>
  );
};

export default RadioButton;
